const FormLog = (props) => {

    return (
        <>
            <form action="" className="formu">
                    <h3 className="title-form">{props.title}</h3>
                    <div className="formu-div">
                        <label htmlFor="email" className="label_form">Email</label>
                        <input onChange={(e)=> props.setEmail(e.target.value)} type="email" className="form-label input_label" />
                        <label htmlFor="password" className="label_form" >Password</label>
                        <input type="password" onChange={(e)=> props.setPassword(e.target.value)} className="form-label input_label" />
                        {props.isRegistered === false && <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>}
                    </div>

                <button type="submit" onClick={(e) => props.handleUserLog(e)} className="btn btn-light btn_form">Submit</button>
                {props.isRegistered === undefined  && <><div id="passwordHelpBlock" className="form-text">
                    You can also Log in with your Google account by clicking the button below:
                </div>
                <button className="btn btn-light btn_form" onClick={(e) => props.handleGoogle(e)} > Sig in with Google <i className="fa-brands fa-google"></i></button></>}
            </form>
        </>
    )
}
export default FormLog