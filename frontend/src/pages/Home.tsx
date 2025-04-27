import { useState } from "react";
import { useResource, Resource } from "../hooks/useResource";
import ResourceCard from "../components/ResourceCard";
// Comment out the imports which are not ready yet
import ResourceForm from "../components/ResourceForm";
// import EditResourceForm from "../components/EditResourceForm";

const Home = () => {
  const { resources, deleteResource , createResource, loading } = useResource();
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  const handleCreate = async (data: Omit<Resource, "id">) => {
    await createResource(data);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      await deleteResource(id);
      if (editingResource?.id === id) {
        setEditingResource(null);
      }
    }
  };

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource);
  };

  return(
     <div className="p-8 space-y-8">
  <h1 className="text-2xl text-center bg-gray-100 p-1 rounded-full font-bold">Resource Manager</h1>

  
    <ResourceForm onSubmit={handleCreate} />
  

  {loading ? (
    <p>Loading resources...</p>
  ) : (
    <div>
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  )}
</div>
);
};

export default Home;
