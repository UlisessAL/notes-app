import { Link } from "react-router-dom";

const Note = (props) => {

    const {title, shortInfo, category, imgs, id} = props.notes;

    const styleCard = {
        width: "18rem",
        backgroundColor:"grey",
    }

    return (
    <>
        <div className="card" style={styleCard}>

            {imgs !== undefined &&  <img src={imgs} className="card-img-top" alt={imgs}/>}

            <div className="card-body">
                <h3 className="title-note-list">{title}</h3>
                <p className="card-text">Summary: <br /> {shortInfo}</p>
                <h6> Category: {category}</h6>
            </div>
            <Link to={`/note/${id}`}>
                <button className="btn btn-light" id="butto-note">Show more</button>
            </Link>  
        </div>
    </>
    )
}
export default Note