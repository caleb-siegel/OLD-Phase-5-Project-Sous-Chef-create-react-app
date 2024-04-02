import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/" className={"nav-link"}>Home</NavLink>
            </div>
            <div>
                <NavLink to="addrecipe" className={"nav-link"}>Add Recipe</NavLink>
            </div>
            <div>
                <NavLink to="recipedirectory" className={"nav-link"}>Recipe Directory</NavLink>
            </div>
            {/* <div>
                <NavLink to="recipelist" className={"nav-link"}>Home</NavLink>
            </div>
            <div>
                <NavLink to="newrecipe" className={"nav-link"}>New Recipe</NavLink>
            </div>
            <div>
                <NavLink to="notreorders" className={"nav-link"}>Not Reorders</NavLink>
            </div> */}
        </nav>
    )
}

export default Navbar;