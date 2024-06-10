import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import EditNote from "./EditNote";

const Note = ({ id, record, date, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
        {isEditing ? (
          <EditNote
            id={id}
            currentText={record}
            handleEditNote={handleEditNote}
            handleCancelEdit={handleCancelEdit}
          />
        ) : (
          <>
		  <div className="note">
            <span>{record}</span>
            <div className="note-footer">
              <small>{date}</small>
              <div className="note-icon">
                <AiFillEdit
                  className="edit-icon"
                  size="1.3em"
                  onClick={handleEditClick}
                />
                <MdDeleteForever
                  onClick={() => handleDeleteNote(id)}
                  className="delete-icon"
                  size="1.3em"
                />
              </div>
            </div>
			</div>
          </>
        )}
    </>
  );
};

export default Note;
