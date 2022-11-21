import { NavLink} from "react-router-dom";


function NavBar() {

    const aboutActive = true;
    const entryActive = false;
    const playlistActive = false;
    const linkStyles = {
        display: "inline-block",
        width: "31.2%",
        padding: "12px",
        background: "LightSeaGreen",
        textDecoration: "none",
        color: "white",
    }
    const activeStyles = {
        display: "inline-block",
        width: "31.2%",
        padding: "12px",
        background: "LightBlue",
        textDecoration: "none",
        color: "white",
    }
    //active style for about

    return (
        <div id="links">
            
            <NavLink to="/" exact="true" style={window.location.href === "http://localhost:3001/" || window.location.href === "http://localhose:3001"? activeStyles :linkStyles}  
            onClick={() => {
                if(aboutActive !== true) {
                aboutActive = !aboutActive;
                playlistActive = false;
                entryActive = false;
            }}}>About</NavLink>
            <NavLink to="/createEntry" exact="true" style={window.location.pathname === "/createEntry" ? activeStyles :linkStyles} 
            onClick={() => {
                if(entryActive !== true) {
                entryActive = !entryActive;
                playlistActive = false;
                aboutActive = false;
            }}}>Create Entry</NavLink>
            <NavLink to="/playlist" exact="true" style={window.location.pathname === "/playlist" ? activeStyles :linkStyles} 
            onClick={() => {
                if(playlistActive !== true) {
                playlistActive = !playlistActive;
                aboutActive = false;
                entryActive = false;
            }}}>Your Playlist</NavLink>

        </div>
        
    )

}

export default NavBar;