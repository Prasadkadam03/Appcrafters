import { useState } from "react";
import { useResource, Resource } from "../hooks/useResource";
import ResourceForm from "../components/ResourceForm";
import EditResourceForm from "../components/EditResourceForm";
import ResourceCard from "../components/ResourceCard";

const Home = () => {
  const { resources, createResource, updateResource, deleteResource, loading } = useResource();
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  const handleCreate = async (data: Omit<Resource, "id">) => {
    await createResource(data);
  };

  const handleUpdate = async (data: Omit<Resource, "id">) => {
    if (editingResource) {
      await updateResource(editingResource.id, data);
      setEditingResource(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteResource(id);
      if (editingResource?.id === id) setEditingResource(null);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resource Manager</h1>

      {editingResource ? (
        <EditResourceForm
          resource={editingResource}
          onUpdate={handleUpdate}
          onCancel={() => setEditingResource(null)}
        />
      ) : (
        <ResourceForm onSubmit={handleCreate} />
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onDelete={handleDelete}
              onEdit={() => setEditingResource(resource)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
