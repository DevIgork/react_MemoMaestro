import { useState, useEffect } from "react";
import NoteList from "./compoments/NotesList";
import Search from "./compoments/Search";
import React from "react";
import NoteService from "./services/NoteService";
import { useTranslation } from "react-i18next";
import "./i18n";
import LanguageSwitcher from "./compoments/LanguageSwitcher";

const App = () => {
  const { t } = useTranslation();
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesData = await NoteService.getNotes();
        setNotes(notesData);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const addNote = (record) => {
    const date = new Date();
    const newNote = {
      record,
      date: date.toLocaleDateString(),
    };
    NoteService.postNote(newNote).then((note) => {
      setNotes([...notes, note]);
    });
  };

  const editNote = (id, updatedRecord) => {
    const date = new Date();
    const updatedNote = {
      record: updatedRecord,
      date: date.toLocaleDateString(),
    };
    NoteService.putNote(id, updatedNote).then((note) => {
      setNotes(notes.map((n) => (n.id === id ? note : n)));
    });
  };

  const deleteNote = (id) => {
    NoteService.deleteNote(id).then(() => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo-text">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="logo-description">
            <h1 className="title">Memo Maestro</h1>
            <p className="tagline">{t("lower_text_placeholder")}</p>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
      <Search
        handleSearchNote={setSearchText}
        placeholder={t("search_placeholder")}
      />
      <NoteList
        notes={notes.filter((note) =>
          (note.record?.toLowerCase() ?? "").includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote}
      />
    </div>
  );
};

export default App;
