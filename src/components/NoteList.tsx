import { Note } from "../App";
import NoteBox from "./NoteBox";

const NoteList = ({
  notes,
  setNotes,
  archived = false,
}: {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  archived?: boolean;
}) => {
  return notes.length > 0 ? (
    <div className="w-full max-w-5xl h-full pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
      {notes
        .filter((note) => (archived ? note.archived : !note.archived))
        .map((note, i) => (
          <NoteBox
            key={i}
            note={note}
            onDelete={(id) => {
              setNotes((prev) => prev.filter((n) => n.id !== id));
            }}
            onArchive={(id) => {
              setNotes((prev) =>
                prev.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n))
              );
            }}
          />
        ))}
    </div>
  ) : (
    <div className="w-full">
      <h1 className="text-center text-2xl text-white">You have no notes</h1>
    </div>
  );
};

export default NoteList;
