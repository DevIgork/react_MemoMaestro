import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const AddNote = ({ handleAddNote }) => {
  const { t } = useTranslation();
  const [noteRecord, setNoteRecord] = useState("");
  const characterLimit = 250;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteRecord(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteRecord.trim().length > 0) {
      handleAddNote(noteRecord);
      setNoteRecord("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder={t("add_note_placeholder")}
        value={noteRecord}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{t("remaining_characters", { count: characterLimit - noteRecord.length })}</small>
        <button className="save" onClick={handleSaveClick}>{t("save_button")}</button>
      </div>
    </div>
  );
};

export default AddNote;
