import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import HomePage from "../../HomePage"

const Log = () => {

  const auth = useAuthContext()
  const {displayName} = auth.user
  console.log(displayName);


  const [isRegistered, setIsRegistered] = useState(null)
  const [emailRegister, setEmailRegister] = useState("")
  const [passwordRegister, setPasswordRegister] = useState("")


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleRegister = (e) => {
    e.preventDefault()
    auth.register(emailRegister, passwordRegister)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  }

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  }

  const handleLogOut = () => {
    auth.logOut()
}

  return (
    <>
    {auth.user === "" ? <div className="cont-form">
      <div className="div-form">
        {!isRegistered ? 
        <form action="" className="formu">
          <h3 className="title-form">Register</h3>
          <div className="formu-div">
            <label htmlFor="email" className="label_form">Email</label>
            <input onChange={(e)=> setEmailRegister(e.target.value)} type="email" className="form-label input_label" />
            <label htmlFor="password" className="label_form" >Password</label>
            <input type="password" onChange={(e)=> setPasswordRegister(e.target.value)} className="form-label input_label" />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
          </div>

          <button type="submit" onClick={(e) => handleRegister(e)} className="btn btn-light btn_form">Submit</button>
        </form> : 
          <form action="" className="formu">
            <h3 className="title-form">Login</h3>
            <div className="formu-div">
              <label htmlFor="emailLogin" className="label_form" >Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-label input_label" />
              <label htmlFor="passwordLogin" className="label_form" >Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-label input_label" />
            
            <button type="submit" className="btn btn-light btn_form" onClick={(e) => handleLogin(e)} >Submit</button>
            <div id="passwordHelpBlock" className="form-text">
                You can also Log in with your Google account by clicking the button below:
            </div>
            <button className="btn btn-light btn_form" onClick={(e) => handleGoogle(e)} >Google</button>
            </div>
          </form>
    }

    <button className="btn btn-dark" onClick={()=> setIsRegistered(!isRegistered)} >{!isRegistered ? "Already have an account? Log in" : "Not have an account? Register"}</button>
        
      </div>
    </div>:
    <HomePage  handleLogOut={handleLogOut} />}
  </>
    
  )
}
export default Log