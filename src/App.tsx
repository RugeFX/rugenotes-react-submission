import { useState } from "react";
import TabButtons from "./components/TabButtons";
import NoteList from "./components/NoteList";
import type Note from "./types/note";
import { PlusIcon } from "@heroicons/react/24/outline";
import initialData from "./utils/initialData";
import AddModal from "./components/AddModal";
import { Toaster } from "react-hot-toast";

function App() {
  const [notes, setNotes] = useState<Note[]>(initialData);
  const [activeTab, setActiveTab] = useState<string>("notes");
  const [searchInput, setSearchInput] = useState<string>("");
  const [addModalShown, setAddModalShown] = useState<boolean>(false);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchInput(e.target.value);
  };
  const onSaveNote = (note: Note) => {
    setNotes((prev) => [...prev, note]);
    setAddModalShown(false);
  };

  return (
    <>
      <Toaster position="top-right" />
      <AddModal show={addModalShown} setShow={setAddModalShown} onSaveNote={onSaveNote} />
      <main className="bg-background w-full min-h-screen py-5 px-9">
        <h1 className="text-primary text-4xl font-bold pb-4">Ruge Notes</h1>
        <div className="w-full mb-4 pb-4 flex gap-3 flex-col md:flex-row justify-start border-b-2">
          <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
          <input
            className="p-3 w-full max-w-xl bg-transparent border-2 border-primary rounded-xl outline-none focus:border-white text-primary"
            type="search"
            name="search"
            placeholder="Search notes..."
            onChange={onSearchChange}
            value={searchInput}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <button
            className="group p-3 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-background outline-none w-full max-w-5xl flex justify-center items-center gap-3 rounded-xl transition-all duration-200"
            onClick={() => setAddModalShown(true)}
          >
            <PlusIcon className="w-5 pointer-events-none" />
            <span className="block pointer-events-none text-white group-hover:text-background transition-all duration-200">
              New Note
            </span>
          </button>
          <NoteList
            notes={notes.filter((n) => n.title.toLowerCase().includes(searchInput.toLowerCase()))}
            setNotes={setNotes}
            archived={activeTab === "archived"}
          />
        </div>
      </main>
    </>
  );
}

export default App;
