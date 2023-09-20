import { useState } from "react";
import TabButtons from "./components/TabButtons";
import NoteList from "./components/NoteList";

export type Note = {
  id: number | string;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
};

const initialNotes: Note[] = [
  {
    id: 1,
    title: "Hello World",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint officia quo reiciendis, culpa fuga eligendi maiores asperiores? Quo necessitatibus quos minus animi ut quas deserunt?",
    archived: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Hello World 2",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint officia quo reiciendis, culpa fuga eligendi maiores asperiores? Quo necessitatibus quos minus animi ut quas deserunt?",
    archived: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
];

function App() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [activeTab, setActiveTab] = useState<string>("notes");

  return (
    <main className="bg-background w-full min-h-screen py-5 px-9">
      <h1 className="text-primary text-4xl font-bold pb-4">Ruge Notes</h1>
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <NoteList notes={notes} setNotes={setNotes} archived={activeTab === "archived"} />
    </main>
  );
}

export default App;
