import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getNoteByCategory, getNotes } from "../../services/Firebase"

import "./NoteList.css"
import NoteList from "./NoteList/NoteList"

const NoteContainer = () => {

    const [notes, setNotes] = useState([]),
    {categoryId} = useParams()
    console.log(categoryId);

    useEffect(() => {

        if (!categoryId) {
            getNotes().then((res) => {
                setNotes(res)
                console.log(notes);
            })
        } else {
            getNoteByCategory(categoryId).then((res) => {
                setNotes(res)
            })
        }

    }, [categoryId])
    

    return (

    <div className="note-cont">
        <div className="container text-center">
            <div className="row">
                <NoteList notes={notes} />
            </div>
        </div>
    </div>
    )
}
export default NoteContainer