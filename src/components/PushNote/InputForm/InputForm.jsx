const InputForm = (props) => {
    return (
        <>

        

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">{props.name.toUpperCase()}</label>
                {props.name === "info" ? <textarea type="text" className="form-control" id="exampleInputEmail1" value={props.value} 
                            onChange={props.onChange} name={props.name}/>:
                            <input type="text" className="form-control" id="exampleInputEmail1" value={props.value} 
                            onChange={props.onChange} name={props.name}/>}
                
                {props.name === "category" && <div id="category-info" className="form-text">Up to now, the categories availabes are: homework or others</div>}
                        </div>
        </>
    )
    }
    export default InputForm