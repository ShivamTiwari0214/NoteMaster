import Note from "./note/Notes";
import  AddNote  from "./note/AddNote";
function Home(props) {
  return (
    <div className="container my-4">
      <AddNote showAlert={props.showAlert}/>
    <h3>Your Notes</h3>
    <Note showAlert={props.showAlert}/>
    </div>
  );
}

export default Home;
