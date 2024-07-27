import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
  const url = 'http://localhost:5000/'
    const [state,setState] = useState([])
      
      // Fetch all Notes 
      const fetchNotes = async () => {
        const response = await fetch(`${url}api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
          },
        });

        const json = await response.json() ;
        setState(state.concat(json)) ;
      }
    
    // Insert New Note
    const addNote = async ( title , descricption , tag ) => {
      const response = await fetch(`${url}api/notes/addnotes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({title,descricption,tag}),
        // ...
      });

      const note = await response.json() ;
      setState(state.concat(note)) ;
      props.showAlert("Note Added sucessfully","success")
    }

    // Delete Note 
    const deleteNote = async (id) =>{
      props.showAlert("Note Deleted sucessfully","success")
       await fetch(`${url}api/notes/deletenotes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        }
      });

      const newState = state.filter((note) => {return note._id!==id});
      setState(newState);
    }

    const editNote = async (id,title , descricption , tag ) => {
      props.showAlert("Note Edited sucessfully","success")
      const response = await fetch(`${url}api/notes/updatenotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({title,descricption,tag}),
      });

      let newNotes = JSON.parse(JSON.stringify(state))
      for (let index = 0; index < newNotes.length; index++) {

        if (newNotes[index]._id === id ) {
          newNotes[index].title = title ;
          newNotes[index].descricption = descricption ;
          newNotes[index].tag = tag ;
          break ;
        }
      }
      setState(newNotes)

      
    }

    return(
        <NoteContext.Provider value={{state,setState,addNote,editNote,deleteNote,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState ;