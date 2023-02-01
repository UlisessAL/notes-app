import Note from "../Note/Note"

const NoteList = (props) => {


  return (
    <div className="row gap-5">
        {props.notes.map((note) => <Note  key={note.title} notes={note} />)}
    </div>
        
  )
}
export default NoteList