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
                <h3>{title}</h3>
                <p className="card-text">{shortInfo}</p>
                <p> Categoría: {category}</p>
            </div>
            <Link to={`/note/${id}`}>
                <button className="btn btn-light">Ver más</button>
            </Link>  
        </div>
    </>
    )
}
export default Note