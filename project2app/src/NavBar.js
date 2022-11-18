import { NavLink} from "react-router-dom";


function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div id="links">
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}}>About</NavLink>
            <NavLink to="/createEntry" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Create Entry</NavLink>
            <NavLink to="/playlist" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Your Playlist</NavLink>

        </div>
        
    )
    //switch with routes between playlist page, song form , about
    //navbar should always be rendered 

}

export default NavBar;