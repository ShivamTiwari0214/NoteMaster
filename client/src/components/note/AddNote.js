import React, { useContext, useState } from "react";
import noteContext from "../../context/note/noteContext";

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", descricption: "", tag: "" });

  const onClickHandler = (e) => {
    e.preventDefault()
    props.showAlert('Added Sucessfully','sucess')
    props.showAlert("Added Sucessfully","success")
    addNote(note.title, note.descricption , note.tag);
    setNote({title: "", descricption: "", tag: ""})
  };

  const onChangeHandler = (e) => {
    setNote({...note,[e.target.name]:e.target.value});
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input required minLength={5}
          value={note.title}
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descricption" className="form-label">
            Descricption
          </label>
          <input required minLength={5}
          value={note.descricption}
            type="text"
            className="form-control"
            id="descricption"
            name="descricption"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            tag
          </label>
          <input required minLength={5}
          value={note.tag}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChangeHandler}
          />
        </div>
        <button disabled={note.title.length< 5 || note.descricption.length<5} type="submit" className="btn btn-primary" onClick={onClickHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
