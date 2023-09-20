import formatDate from "../utils/formatDate";
import { Note } from "../App";
import { ArchiveBoxIcon, TrashIcon } from "@heroicons/react/24/outline";

const NoteBox = ({
  note,
  onDelete,
  onArchive,
}: {
  note: Note;
  onDelete: (id: string | number) => void;
  onArchive: (id: string | number) => void;
}) => {
  return (
    <article className="text-white border-2 border-white rounded-xl overflow-hidden flex flex-col flex-wrap justify-between">
      <div className="flex flex-col p-3">
        <span className="block text-xl text-primary font-bold">{note.title}</span>
        <span className="block text-sm opacity-60">{formatDate(note.createdAt)}</span>
        <p>{note.body}</p>
      </div>
      <div className="h-12 w-full flex border-t-2">
        <button
          className="w-full text-primary flex justify-center items-center hover:bg-primary hover:text-background transition-all duration-200"
          onClick={() => onArchive(note.id)}
        >
          <ArchiveBoxIcon className="w-7 pointer-events-none" />
        </button>
        <button
          className="w-full text-red-500 flex justify-center items-center hover:bg-red-500 hover:text-background transition-all duration-200"
          onClick={() => onDelete(note.id)}
        >
          <TrashIcon className="w-7 pointer-events-none" />
        </button>
      </div>
    </article>
  );
};

export default NoteBox;
