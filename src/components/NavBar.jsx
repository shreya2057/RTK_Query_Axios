import { Link } from "react-router-dom";

function NavBar(){
    return <>
        <Link to='/create' className="link">Create</Link>
        <Link to='/read' className="link">Read</Link>
        <Link to='/update' className="link">Update</Link>
        <Link to='/' className="link">Delete</Link>
    </>
}

export default NavBar;