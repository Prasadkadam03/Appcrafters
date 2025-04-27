import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";

// -----------------------------
// Zod Schema Definitions
// -----------------------------
export const resourceSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.enum(["Article", "Video", "Tutorial"]),
});

export const resourceArraySchema = z.array(resourceSchema);

// -----------------------------
// Types
// -----------------------------
export type ResourceType = "Article" | "Video" | "Tutorial";

export interface Resource extends z.infer<typeof resourceSchema> {}

// -----------------------------
// Constants
// -----------------------------
const BASE_URL = "http://localhost:3000/api/v1";

// -----------------------------
// Hook
// -----------------------------
export const useResource = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchResources = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/resource`);
      const parsed = resourceArraySchema.safeParse(res.data);

      if (parsed.success) {
        setResources(parsed.data);
      } else {
        console.error("Invalid resource data:", parsed.error);
        setResources([]); // optional: clear resources if invalid
      }
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    } finally {
      setLoading(false);
    }
  };

  const createResource = async (data: Omit<Resource, "id">) => {
    try {
      await axios.post(`${BASE_URL}/resource`, data);
      fetchResources();
    } catch (error) {
      console.error("Failed to create resource:", error);
    }
  };

  const updateResource = async (id: string, data: Omit<Resource, "id">) => {
    try {
      await axios.put(`${BASE_URL}/resource/${id}`, data);
      fetchResources();
    } catch (error) {
      console.error("Failed to update resource:", error);
    }
  };

  const deleteResource = async (id: number) => {
    try {
      await axios.delete(`${BASE_URL}/resource/${id}`);
      fetchResources();
    } catch (error) {
      console.error("Failed to delete resource:", error);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return { resources, createResource, updateResource, deleteResource, loading };
};
