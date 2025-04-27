import { useState } from "react";
import { useResource, Resource } from "../hooks/useResource";
import ResourceCard from "../components/ResourceCard";
// Comment out the imports which are not ready yet
// import ResourceForm from "../components/ResourceForm";
// import EditResourceForm from "../components/EditResourceForm";

const Home = () => {
  const { resources, deleteResource, loading } = useResource();
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  

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

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-center">Resource Manager</h1>

      {/* Form Section */}
      <div className="bg-gray-50 p-6 rounded-md shadow-md">
        {editingResource ? (
          <div className="text-gray-600 italic">
            {/* EditResourceForm will go here */}
            Edit Form Coming Soon...
          </div>
        ) : (
          <div className="text-gray-600 italic">
            {/* ResourceForm will go here */}
            Create Form Coming Soon...
          </div>
        )}
      </div>

      {/* Resource Cards */}
      {loading ? (
        <p className="text-center text-gray-500">Loading resources...</p>
      ) : resources.length === 0 ? (
        <p className="text-center text-gray-500">No resources yet. Add your first one! 🚀</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
