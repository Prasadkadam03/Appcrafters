import { useState, useEffect } from "react";
import { ResourceType, Resource } from "../hooks/useResource";

interface Props {
  resource: Resource;
  onUpdate: (data: { title: string; description: string; type: ResourceType }) => void;
  onCancel: () => void;
}

const EditResourceForm = ({ resource, onUpdate, onCancel }: Props) => {
  const [title, setTitle] = useState(resource.title);
  const [description, setDescription] = useState(resource.description);
  const [type, setType] = useState<ResourceType>(resource.type);

  useEffect(() => {
    setTitle(resource.title);
    setDescription(resource.description);
    setType(resource.type);
  }, [resource]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ title, description, type });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-xl mb-3">Edit Resource</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded mb-3 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded mb-3 w-full"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as ResourceType)}
        className="border p-2 rounded mb-3 w-full"
      >
        <option value="Article">Article</option>
        <option value="Video">Video</option>
        <option value="Tutorial">Tutorial</option>
      </select>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Update</button>
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white p-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditResourceForm;
