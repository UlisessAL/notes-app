import { Link } from "react-router-dom"

const NavBar = (props) => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/newNote" className="nav-link active" aria-current="page" >New Note</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/category/homework" className="nav-link active" aria-current="page" >Homeworks</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/category/others" className="nav-link active" >Others</Link>
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => props.handleLogOut()} className="btn bg-light" >Log Out</button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar