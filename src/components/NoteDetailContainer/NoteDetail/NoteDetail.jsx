const NoteDetail = (props) => {

    const {title, category, info, imgs} = props.note;
    const cardStyle = {
        backgroundColor:"grey",
    }
    const spanStyle = {
        color:"white"
    }

    return (
    <div>

        <div className="card text-center" style={cardStyle}>
            <div className="card-header">
            <h5 className="card-title">{title}</h5>
            </div>
        <div className="card-body">

        {imgs !== undefined && <img src={imgs} className="card-img-top" alt={imgs}/>}

            <p className="card-text">Information: <br /> {info}</p>
        </div>
            <div className="card-footer text-muted">
            <span style={spanStyle}> Category: {category}</span>
            </div>
        </div>

    </div>
    )
}
export default NoteDetail