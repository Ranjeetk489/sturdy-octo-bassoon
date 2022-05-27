import React, {useState, useRef} from 'react';
import { BsFillPaletteFill } from "react-icons/bs";


const NoteHeader = ({log}) => {
const [toggleTheme, setToggleTheme] = useState(false);
  const handleThemeClick = (e) => {
    console.log(e.target.attributes.getNamedItem("colorvalue").value);
    setToggleTheme(!toggleTheme);
  };

  const titleRef = useRef()
  const priorityOptRef = useRef();
  return (
    <div className="note-card-header">
        <div className="card-flex-wrapper">
          <label htmlFor="title">Create a Title </label>
          <input
            type="text"
            className="note-card-field"
            placeholder="title here.."
            onChange = {(e) => {titleRef.current = e.current.value}}
          />
        </div>
        <div className="card-flex-wrapper">
          <label htmlFor="priority">Set Priority</label>
          <select
            className="priority-field"
            name="priority"
            id="priority"
            value={priorityOptRef.current}
            onChange={(e) => (priorityOptRef.current = e.target.value)}
          >
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="no priority">No Priority</option>
          </select>
        </div>
        <div className="card-flex-wrapper">
          <div className="theme-box">
            <button
              onClick={() => setToggleTheme(!toggleTheme)}
              className="note-theme-btn"
            >
              <BsFillPaletteFill size={15} />
            </button>
          </div>
          {toggleTheme && (
            <div className="theme-optionsBox" onClick={handleThemeClick}>
              <div className="theme-optionBox">
                <div
                  className="optionBox green-optionBox"
                  colorvalue="#008000"
                ></div>
                <span className="theme-title">Green</span>
              </div>
              <div className="theme-optionBox">
                <div
                  className="optionBox orange-optionBox "
                  colorvalue="#FFA500"
                ></div>
                <span className="theme-title">Orange</span>
              </div>
              <div className="theme-optionBox">
                <div
                  className="optionBox red-optionBox"
                  colorvalue="#DC143C"
                ></div>
                <span className="theme-title">Red</span>
              </div>
              <div className="theme-optionBox">
                <div
                  className="optionBox blue-optionBox"
                  colorvalue="#1E90FF"
                ></div>
                <span className="theme-title">Blue</span>
              </div>
              <div className="theme-optionBox">
                <div
                  className="optionBox salmon-optionBox"
                  colorvalue="#FA8072"
                ></div>
                <span className="theme-title">Salmon</span>
              </div>
              <div className="theme-optionBox">
                <div
                  className="optionBox aqua-optionBox"
                  colorvalue="#FA8072"
                ></div>
                <span className="theme-title">Aqua</span>
              </div>
            </div>
          )}
        </div>
        <button onClick={log} className="note-content-btn">
          Create
        </button>
      </div>
  )
}

export default NoteHeader