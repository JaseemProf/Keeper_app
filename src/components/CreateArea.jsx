import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isClicked, setCLicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  }
  function handleClick(){
    setCLicked(true)
  }
        

  return (
    <div>
      <form  className="create-note">
      { isClicked && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        /> } 
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isClicked ? true : false}>
        <Fab
          onClick={(e) => {
            props.onAdd(note);
            setNote({ title: "", content: "" });
            e.preventDefault();
          }}
        >
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
