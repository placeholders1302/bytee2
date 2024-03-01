import { NavLink } from "react-router-dom";
import "./Header.css"
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import SearchBar from "../../components/SearchBar/SearchBar";

function Header() {
  return (
    <>
      <div className="navbar">
        
      <NavLink to=""><EmojiFoodBeverageIcon/></NavLink>

        <NavLink to="/categories">categories</NavLink>

        <SearchBar/>

        <p>learn on bytee</p>

        <p>teach on bytee</p>

        <NavLink to='login'>login</NavLink>

        <NavLink to='signup'>signup</NavLink>

        <p>language icon</p>
      </div>
    </>
  )
}

export default Header