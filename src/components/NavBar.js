import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => (
	<div className="seet">
	  <NavLink to="/" exact={true}>Conventor</NavLink>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<NavLink to="/setting" >Setting</NavLink>
	</div>
);

export default NavBar;
