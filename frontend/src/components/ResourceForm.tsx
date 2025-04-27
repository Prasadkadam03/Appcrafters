import { useState } from "react";
import { ResourceType } from "../hooks/useResource";

interface Props {
  onSubmit: (data: { title: string; description: string; type: ResourceType }) => void;
  initialData?: { title: string; description: string; type: ResourceType };
  onCancel?: () => void;
}

const ResourceForm = ({ onSubmit, initialData, onCancel }: Props) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [type, setType] = useState<ResourceType>(initialData?.type || "Article");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, type });
    setTitle("");
    setDescription("");
    setType("Article");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  p-6 border rounded-lg shadow">
      {/* Title Field */}
      <div className="mt-2">
        <label className="block mb-2 text-sm text-gray-700 font-semibold">Title</label>
        <div className="relative">
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the title"
            required
          />
        </div>
      </div>

      {/* Description Field */}
      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-700 font-semibold">Description</label>
        <div className="relative">
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the description"
            required
          />
        </div>
      </div>

      {/* Type Field */}
      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-700 font-semibold">Resource Type</label>
        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value as ResourceType)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="Article">Article</option>
            <option value="Video">Video</option>
            <option value="Tutorial">Tutorial</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4 mt-6">
        <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 w-full rounded-md">Submit</button>
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel} 
            className="bg-gray-300 text-black   rounded-md"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ResourceForm;