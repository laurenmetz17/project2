import { Route , NavLink} from "react-router-dom";
import About from './About';
import Playlist from './Playlist';
import EntryForm from "./EntryForm";


function NavBar() {

    return (
        <div id="links">
            <NavLink>About</NavLink>
            <NavLink>PLaylist</NavLink>
            <NavLink>Create Entry</NavLink>
        </div>
        
    )
    //switch with routes between playlist page, song form , about
    //navbar should always be rendered 

}

export default NavBar;