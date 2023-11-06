import NewNoteForm from "./components/NewNoteForm"
import Notes from "./components/Notes"

export default function App() {
  // const importantNotes = useSelector(state => state.filter(note => note.important))

  return (
    <div>
      <NewNoteForm />
      <Notes />
    </div>
  )
}