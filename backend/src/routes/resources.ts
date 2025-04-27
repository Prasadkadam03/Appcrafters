import express from 'express';
import z from 'zod';

const router = express.Router();

/*
    Zod schema for validating resource input
*/

type ResourceType = "Article" | "Video" | "Tutorial";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: ResourceType;
}

let resources: Resource[] = [
  {
    id: 1,
    title: "Understanding TypeScript",
    description: "A comprehensive guide to TypeScript.",
    type: "Article",
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "Learn the basics of React.",
    type: "Video",
  },
  {
    id: 3,
    title: "Node.js Tutorial",
    description: "A step-by-step tutorial on Node.js.",
    type: "Tutorial",
  },
];

const ResourceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  type: z.enum(["Article", "Video", "Tutorial"]),
});

type ResourceInput = z.infer<typeof ResourceSchema>;

//////////////////////////

// Routes

// Get all resources
router.get("/", (req, res) => {
  res.status(200).json(resources);
});

// Add a new resource
router.post("/", (req , res): any => {
  const parsed = ResourceSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      errors: parsed.error.format(),
    });
  }

  const newResource: Resource = {
    id: resources.length + 1,
    ...parsed.data,
  };

  resources.push(newResource);
  res.status(201).json(newResource);
});


export default router;
