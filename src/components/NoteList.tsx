import type Note from "../types/note";
import NoteBox from "./NoteBox";
import { motion } from "framer-motion";

const NoteList = ({
  notes,
  setNotes,
  archived = false,
}: {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  archived?: boolean;
}) => {
  const currentNotes = notes.filter((note) => (archived ? note.archived : !note.archived));

  const onDelete = (id: string | number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };
  const onArchive = (id: string | number) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n)));
  };

  return currentNotes.length > 0 ? (
    <div className="w-full max-w-5xl h-full pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
      {currentNotes.map((note, i) => (
        <NoteBox key={i} note={note} onDelete={onDelete} onArchive={onArchive} />
      ))}
    </div>
  ) : (
    <div className="w-full pt-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-2xl text-white"
      >
        You have no notes
      </motion.h1>
    </div>
  );
};

export default NoteList;
