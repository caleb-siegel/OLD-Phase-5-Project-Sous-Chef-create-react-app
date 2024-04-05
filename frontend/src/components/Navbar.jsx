import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

function Navbar({ user, logout }) {

    return (
        <Container className="navbar">
            <Container>
                <NavLink to="/" className={"nav-link"}>Home</NavLink>
            </Container>
            <Container>
                <NavLink to="recipedirectory" className={"nav-link"}>Recipe Directory</NavLink>
            </Container>
            {!user ? 
                <Container>
                    <NavLink to="login" className={"nav-link"}>Login</NavLink>
                </Container>
            :
                <Container>
                    <Container>
                        <NavLink to="userrecipes" className={"nav-link"}>Your Recipes</NavLink>
                    </Container>
                    <Container>
                        <NavLink to="/" className={"nav-link"} onClick={logout}>Logout</NavLink>
                        <div>Welcome, {user.name}</div>
                    </Container>
                </Container>
            }
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