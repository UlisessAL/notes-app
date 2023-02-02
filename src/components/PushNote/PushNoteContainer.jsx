import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { exportOneNote, uploadFile } from "../../services/Firebase";
import InputForm from "./InputForm/InputForm";

const PushNoteContainer = () => {

    let navigate = useNavigate()

    const [note, setNote] = useState({title:"", info:"", shortInfo:"", category:""})

    let formFields = Object.keys(note);

    const inputValue = async (evt) => {
        let inputName = evt.target.name;
        let value = evt.target.value;
        let newState = {...note};
        newState[inputName] = value;
        setNote(newState);
    }

    const uploadImg = async (evt) =>{
        // let value = await uploadFile(evt.target.files[0])
        note.imgs = await uploadFile(evt.target.files[0])
        console.log(note);
    }

    const submitForm = (evt) => {
        evt.preventDefault()
        exportOneNote(note)
        navigate("/")
    }

    


    const validateForm = () => {
        return !(note.title !== "" && note.info !== "" && note.shortInfo !== "" && note.category === "homework" || note.category === "others")
    }

    return (

        <div className="container-form">
            <h2 className="title-form">Create and push a Note!</h2>
            <div className="formulary-note">
                <form onSubmit={submitForm}>
                    {formFields.map(field => (
                                <InputForm 
                                    key={field} 
                                    onChange={inputValue} 
                                    name={field} 
                                    value={note[field]} 
                                    label={note[field]}
                                    />
                            ))}
                <input type="file" onChange={uploadImg} className="form-control" id="input-img" disabled={validateForm()} />
                <button type="submit"  disabled={validateForm()}  className="btn btn-primary" id="button-formulary" >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default PushNoteContainer