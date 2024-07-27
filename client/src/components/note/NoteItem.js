import { useContext } from "react";
import noteContext from "../../context/note/noteContext";

function NoteItem(props) {
  const {deleteNote} = useContext(noteContext) ;
  return (
    <div className="col-md-3 ">
      <div className="card my-4" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">
            {props.data.descricption}
          </p>
          <i className="fa-solid fa-trash mx-2" onClick={ ()=>deleteNote(props.data._id)} ></i>
          <i className="fa-solid fa-pen-to-square  mx-2" onClick={ ()=>props.updateNote(props.data)}></i>
        </div>
      </div>
      </div>
  );
}
export default NoteItem