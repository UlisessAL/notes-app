import { memo } from "react"
import { Link } from "react-router-dom"

const NavBar = (props) => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" > <i className="fa-solid fa-house"></i> Home </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/newNote" className="nav-link active" aria-current="page" > <i className="fa-regular fa-note-sticky"></i> New Note</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/category/homework" className="nav-link active" aria-current="page" > <i className="fa-solid fa-briefcase"></i> Homework</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/category/others" className="nav-link active" > <i className="fa-regular fa-lemon"></i> Others</Link>
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => props.handleLogOut()} className="btn bg-light" >Log Out</button>
                </div>
            </nav>
        </div>
    )
}
export default memo(NavBar)