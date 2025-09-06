import { VercelRequest, VercelResponse } from "@vercel/node";
import { db } from "../lib/db";
import { contactMessages, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const [message] = await db.insert(contactMessages).values(validatedData).returning();
      
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully",
        data: message 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        console.error("Database error:", error);
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  } else if (req.method === "GET") {
    try {
      const messages = await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
      res.status(200).json(messages);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to retrieve messages" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
