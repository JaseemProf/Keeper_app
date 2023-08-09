import { useState } from "react";
import Headers from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addItem(note) {
    setAllNotes([...allNotes, note]);
  }
  function deleteItem(id) {
    setAllNotes(() => {
      return allNotes.filter((data, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Headers />
      <CreateArea onAdd={addItem} />
      {allNotes.map((data, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteItem}
          title={data.title}
          content={data.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
