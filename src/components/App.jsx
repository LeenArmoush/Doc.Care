import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import CreateArea from "./CreateArea";
import SideBar from "./SideBar";
import '../App.css';
// import Button from './Button';
import Table from "./Table";



function App() {
  // const [notes, setNotes] = useState([]);
  // <h1>Hiiii</h1>

  
  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div className="App">
      
      <Header />
      {/* style="display: inline" */}
      {/* <h1>Patient: Jane Doe</h1> */}
      <Table />
      {/* <Button /> */}
      <SideBar />
      {/* <div dangerouslySetInnerHTML={{ __html: Button }} /> */}
      {/* <CreateArea onAdd={addNote} /> */}
      {/* {notes.map((noteItem, index) => { */}
        {/* return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ); */}
      {/* })} */}
      <Footer />
    </div>
  );
}

export default App;
