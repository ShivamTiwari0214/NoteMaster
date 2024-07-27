import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../../context/note/noteContext";
import NoteItem from "./NoteItem";

import { useNavigate } from "react-router-dom";


function Note(props) {
  const navigate = useNavigate();
  const ref = useRef("null");
  const refClose = useRef("null");
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescricption: "",
    etag: "default",
  });
  const { state, fetchNotes, editNote } = useContext(noteContext);

  useEffect(() => {
    // eslint-disable-next-line
    if(localStorage.getItem('token'))
    fetchNotes();
  else navigate('/login')
  }, [localStorage.getItem('token')]);

  const onChangeHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescricption: currentNote.descricption,
      etag: currentNote.tag,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescricption, note.etag);
    refClose.current.click();
  };

  return (
    <div className="row ">
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    title
                  </label>
                  <input
                    required
                    minLength={5}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChangeHandler}
                    value={note.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescricption" className="form-label">
                    Descricption
                  </label>
                  <input
                    required
                    minLength={5}
                    type="text"
                    className="form-control"
                    id="edescricption"
                    name="edescricption"
                    onChange={onChangeHandler}
                    value={note.edescricption}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    tag
                  </label>
                  <input
                    required
                    minLength={5}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChangeHandler}
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClickHandler}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {state.map((data, index) => {
        return <NoteItem key={index} data={data} updateNote={updateNote} />;
      })}
    </div>
  );
}

export default Note;
