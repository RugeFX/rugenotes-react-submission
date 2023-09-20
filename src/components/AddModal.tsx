import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Note from "../types/note";
import { errorToast, successToast } from "../utils/toasts";

const AddModal = ({
  show,
  setShow,
  onSaveNote,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onSaveNote: (note: Note) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const maxTitleLength = 50;

  const saveNoteClicked = () => {
    if (title === "" || body === "") {
      errorToast("Title or body cannot be empty!");
      return;
    }

    const note: Note = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onSaveNote(note);
    successToast("Successfully saved your note!");
  };
  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length > maxTitleLength) {
      setTitle((prev) => prev.substring(0, maxTitleLength));
    } else {
      setTitle(e.target.value);
    }
  };

  useEffect(() => {
    if (!show) {
      setTitle("");
      setBody("");
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <div
          className={`min-w-screen h-screen fixed left-0 top-0 place-items-center inset-0 z-50 grid`}
        >
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className="absolute bg-black inset-0 z-0"
          ></motion.div>
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { bounce: false } }}
            className="w-full max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-background"
          >
            <h2 className="text-primary text-center text-xl font-bold">New Note</h2>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="title" className="text-white text-sm">
                  Title
                </label>
                <input
                  required
                  id="title"
                  className="text-primary w-full l p-2 outline-none border-2 bg-transparent border-primary focus:border-white rounded-xl placeholder:text-zinc-600"
                  type="text"
                  placeholder="Insert title..."
                  name="title"
                  value={title}
                  onChange={onTitleChange}
                />
                <span
                  className={`block text-right text-sm ${
                    title.length >= maxTitleLength ? "text-red-500" : "text-white"
                  }`}
                >
                  {title.length} / {maxTitleLength}
                </span>
              </div>
              <div>
                <label htmlFor="body" className="text-white text-sm">
                  Body
                </label>
                <textarea
                  required
                  id="body"
                  className="text-primary w-full h-32 resize-none p-2 outline-none border-2 bg-transparent border-primary focus:border-white rounded-xl placeholder:text-zinc-600"
                  placeholder="Insert note content..."
                  name="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <div className="w-full flex gap-3 justify-center">
                <button
                  className="text-primary hover:text-background w-24 py-2 px-4 hover:bg-primary border-2 border-primary rounded-xl transition-all duration-200 ease-out"
                  onClick={saveNoteClicked}
                >
                  Save
                </button>
                <button
                  className="text-white hover:text-background w-24 py-2 px-4 hover:bg-white border-2 border-white rounded-xl transition-all duration-200 ease-out"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddModal;
