import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => (
	<div>
	  <NavLink to="/" exact={true}>Conventor</NavLink>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<NavLink to="/setting" >Setting</NavLink>
	</div>
);

export default NavBar;
