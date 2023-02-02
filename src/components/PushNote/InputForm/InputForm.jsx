const InputForm = (props) => {

    const hideInput = {
        display:"none"
    }

    const showInput = {
        display:"in-line"
    }

    return (
        <>

        

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" style={props.name === "imgs" ? hideInput : showInput} >{props.name.toUpperCase()}</label>
                {props.name === "info" ? <textarea type="text" className="form-control" id="exampleInputEmail1" value={props.value} 
                            onChange={props.onChange} name={props.name}/>: 
                            <input type="text" className="form-control" id="exampleInputEmail1"  value={props.value} 
                            onChange={props.onChange} name={props.name} style={props.name === "imgs" ? hideInput : showInput} />}
                
                {props.name === "category" && <div id="category-info" className="form-text">Up to now, the categories availabes are: homework or others</div>}
                        </div>
        </>
    )
    }
    export default InputForm