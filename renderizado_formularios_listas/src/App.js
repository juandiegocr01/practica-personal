import './App.css';
import { useState } from 'react'
import { Note } from './Note';


//Manejo de key en react



const App = (props) =>{
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) =>{
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length +1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNotes([...notes, noteToAddToState]) //siempre crear un array nuevo y así se crea
    setNewNote("")

  }

  const handleShowAll = () =>{
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? 'Show only important' : 'Show All'}
      </button>
    <ol> 
      {notes
      .filter((note) =>{
        if(showAll === true) return true
        return note.important === true
      })
      .map(note =>(
        <Note key={note.id} {...note}/>
      ))}
    </ol>

    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange}></input>
      <button>Crear nota</button>
    </form>
    </div>
  );
}

export default App;

