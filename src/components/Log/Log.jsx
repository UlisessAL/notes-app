import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import HomePage from "../../HomePage"
import FormLog from "./FormLog/FormLog"

const Log = () => {

  const auth = useAuthContext()
  const {displayName} = auth.user

  const [isRegistered, setIsRegistered] = useState(false)
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
        <>
          <FormLog 
            title="Register" 
            setEmail={setEmailRegister} 
            setPassword={setPasswordRegister} 
            isRegistered={isRegistered} 
            handleUserLog={handleRegister} 
          />
          <button 
            className="btn btn-dark" 
            onClick={()=> setIsRegistered(!isRegistered)} >
              {!isRegistered ? "Already have an account? Log in" : "Not have an account? Register"}
          </button>
        </>  :
        <>
          <FormLog 
            title="Login" 
            setEmail={setEmail}  
            setPassword={setPassword} 
            handleUserLog={handleLogin} 
            handleGoogle={handleGoogle} 
          />
          <button 
            className="btn btn-dark" 
            onClick={()=> setIsRegistered(!isRegistered)} >
              {!isRegistered ? "Already have an account? Log in" : "Not have an account? Register"}
          </button>
        </>}
      </div>
    </div>:
    <HomePage  handleLogOut={handleLogOut} />}
  </>
    
  )
}
export default Log