import React, { useState } from "react";
import parse from "html-react-parser";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import {GrNotes} from 'react-icons/gr';
import {BsArchiveFill} from 'react-icons/bs';
import {IoTrashBin} from 'react-icons/io5';
import "./DisplayNotes.css";

const initialValues = {
  tag: "",
  color: "",
  title: "",
  content: "",
  priority: "",
  isPinned: "",
  createdAt: ""
}

const DisplayNotes = (props) => {
  const { title, content, color, tag, priority, isPinned } = props.item ?? initialValues;
  const handlePinned = () => {};
  return (
    <div>
      <div
        className="display-note-container"
        style={{ backgroundColor: { color } }}
      >
        <div className="display-note-header">
          <div className="display-note-tag">{tag}</div>
          <div className="display-note-priority">{priority}</div>
          <div className="display-note-pinned" onClick={handlePinned}>
            {isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
          </div>
        </div>

        <h3 className="display-note-title">{title}</h3>
        <div className="display-note-content">{parse(content)}</div>
        <div className="display-note-extraBtn d-flex flex-row-reverse">
          <GrNotes></GrNotes>
          <BsArchiveFill></BsArchiveFill>
          <IoTrashBin></IoTrashBin>
        </div>
      </div>
    </div>
  );
};

export default DisplayNotes;
