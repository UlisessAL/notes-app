import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getNote } from "../../services/Firebase";

import NoteDetail from "./NoteDetail/NoteDetail";
import "./NoteDetailContainer.css"

const NoteDetailContainer = () => {

    const [note, setNote] = useState([])

    let params = useParams();

    useEffect(() => {   
        getNote(params.id).then((res) => {
            setNote(res)
        })
    }, [])
    


  return (

    <div className="note-back">
    <div className="note-detail">
        <NoteDetail note={note}/>
    </div>
    </div>
  )
}
export default NoteDetailContainer