import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../reducers/noteReducer"

const Notes = () => {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()

  const toggleImportant = (noteId) => {
    dispatch(toggleImportanceOf(noteId))
  }

  return (
    <ul>
      {
        notes.map((note) => {
          return <li key={note.id}>
            {note.content}
            <strong> {note.important ? 'important' : 'not important'}</strong>
            <button onClick={ () => { toggleImportant(note.id)} }>
            {
              note.important ? 'not important' :  'make important'
            }
            </button>
          </li>
        })
      }
    </ul>
  )
}
export default Notes