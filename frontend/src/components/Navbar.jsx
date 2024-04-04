import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

function Navbar() {
    return (
        <Container className="navbar">
            <Container>
                <NavLink to="/" className={"nav-link"}>Home</NavLink>
            </Container>
            <Container>
                <NavLink to="recipedirectory" className={"nav-link"}>Recipe Directory</NavLink>
            </Container>
            {/* <div>
                <NavLink to="recipelist" className={"nav-link"}>Home</NavLink>
            </div>
            <div>
                <NavLink to="newrecipe" className={"nav-link"}>New Recipe</NavLink>
            </div>
            <div>
                <NavLink to="notreorders" className={"nav-link"}>Not Reorders</NavLink>
            </div> */}
        </Container>
    )
}

export default Navbar;