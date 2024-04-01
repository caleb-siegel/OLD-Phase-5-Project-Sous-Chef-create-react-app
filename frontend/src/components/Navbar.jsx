import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
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