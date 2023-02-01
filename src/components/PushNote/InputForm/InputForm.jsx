const InputForm = (props) => {
    return (
        <>

        

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">{props.name.toUpperCase()}</label>
                {props.name === "info" ? <textarea type="text" class="form-control" id="exampleInputEmail1" value={props.value} 
                            onChange={props.onChange} name={props.name}/>:
                            <input type="text" class="form-control" id="exampleInputEmail1" value={props.value} 
                            onChange={props.onChange} name={props.name}/>}
                
                {props.name === "category" && <div id="category-info" class="form-text">Up to now, the categories availabes are: homework or others</div>}
                        </div>
        </>
    )
    }
    export default InputForm