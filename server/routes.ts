import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio API routes
  app.get("/api/portfolio", async (req, res) => {
    try {
      // For now, return static data since we're using in-memory storage
      const portfolioData = {
        name: "JOHN DEVELOPER",
        title: "Full Stack Developer",
        bio: "Passionate software engineer with expertise in modern web technologies.",
        email: "john@developer.io",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        skills: ["javascript", "typescript", "react", "nodejs", "python", "postgresql"],
        experience: [],
        projects: [],
        socialLinks: {
          linkedin: "#",
          twitter: "#", 
          github: "#"
        }
      };
      
      res.json(portfolioData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
