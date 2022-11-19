import { NavLink} from "react-router-dom";


function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "31.2%",
        padding: "12px",
        //margin: "0 6px 6px",
        background: "LightSeaGreen",
        textDecoration: "none",
        color: "white",
      };
    //add active style 
    return (
        <div id="links">
            
            <NavLink to="/" exact="true" style={linkStyles} >About</NavLink>
            <NavLink to="/createEntry" exact="true" style={linkStyles} >Create Entry</NavLink>
            <NavLink to="/playlist" exact="true" style={linkStyles} >Your Playlist</NavLink>

        </div>
        
    )
    //switch with routes between playlist page, song form , about
    //navbar should always be rendered 

}

export default NavBar;