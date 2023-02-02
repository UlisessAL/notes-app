import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getNoteByCategory, getNotes } from "../../services/Firebase"

import "./NoteList.css"
import NoteList from "./NoteList/NoteList"

const NoteContainer = () => {

    const [notes, setNotes] = useState([]),
    {categoryId} = useParams()

    useEffect(() => {

        if (!categoryId) {
            getNotes().then((res) => {
                setNotes(res)
            })
        } else {
            getNoteByCategory(categoryId).then((res) => {
                setNotes(res)
            })
        }

    }, [categoryId])
    

    function showHour(){
        let now = new Date()
        let hour = now.getHours()
        let minutes = now.getMinutes()

        

        let hourLocal;

        return hourLocal = hour + ":" + minutes
    }

    const hourStyle = {
        color:"white"
    }

    return (

    <div className="note-cont">
        <div className="hour-div"><h3 style={hourStyle}>{showHour()}</h3></div>
        {categoryId && 
        <div className="category-div">
            <h2 className="navbar-text"> {categoryId.toUpperCase()}</h2>
        </div>}
        <div className="container text-center">
            <div className="row">
                <NoteList notes={notes} />
            </div>
        </div>
    </div>
    )
}
export default NoteContainer