import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"

const NewNoteForm = () => {
  const dispatch = useDispatch()

  const addNote = (e) => {
    e.preventDefault()
    const { target } = e
    const content = target.note.value
    target.note.value = ''
    // console.log(content)
    dispatch(createNote(content))
  }


  return (
      <form onSubmit={ addNote }>
        <input name="note" />
        <button>Add note</button>
      </form>
  )
}
export default NewNoteForm