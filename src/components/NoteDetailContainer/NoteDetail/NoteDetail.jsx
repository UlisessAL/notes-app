const NoteDetail = (props) => {

    const {title, category, info, imgs} = props.note;
    const cardStyle = {
        backgroundColor:"grey",
    }

  return (
    <div>

        <div className="card text-center" style={cardStyle}>
            <div className="card-header">
                {category}
            </div>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>

        {imgs !== undefined && <img src={imgs} className="card-img-top" alt={imgs}/>}

            <p className="card-text">{info}</p>
        </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>

    </div>
  )
}
export default NoteDetail