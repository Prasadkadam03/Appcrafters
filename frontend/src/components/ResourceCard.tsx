import { Resource } from "../hooks/useResource";

interface Props {
    resource: Resource;
    onDelete: (id: number) => void;
    onEdit: (resource: Resource) => void;
}

const ResourceCard = ({ resource, onDelete, onEdit }: Props) => {
    return (
        <div className="p-2" >
            <div className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white max-w-screen-md mx-auto">
                <div>
                    <div className="flex items-center gap-4">
                        {/* Resource Title */}
                        <div className="mt-4 text-lg sm:text-xl font-bold text-gray-900">{resource.title}</div>

                        {/* Resource Type */}
                        <div className="mt-4 text-sm sm:text-lg font-semibold text-blue-500">{resource.type}</div>

                    </div>
                    {/* Resource Description Preview */}
                    <div className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {resource.description}
                    </div>
                </div>



                {/* Edit & Delete Buttons */}
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => onEdit(resource)}
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(resource.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};



export default ResourceCard;
