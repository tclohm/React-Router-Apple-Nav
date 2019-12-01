import React from "react";
import { NavLink } from "react-router-dom";

export default function innerNavBar(props) {

	//const {} = props;

	return (

		<div className="sub-nav">
			<NavLink to="#" className="apple-top-nav-links">
				<i class="fas fa-desktop"></i>
			</NavLink>
			<NavLink to="#" className="apple-top-nav-links">
				<i class="fas fa-hdd"></i>
			</NavLink>
			<NavLink to="#" className="apple-top-nav-links">
				<i class="fas fa-server"></i>
			</NavLink>
			<NavLink to="#" className="apple-top-nav-links">
				<i class="fas fa-laptop"></i>
			</NavLink>
			<NavLink to="#" className="apple-top-nav-links">
				<i class="fas fa-tablet-alt"></i>
			</NavLink>
			<NavLink to="#" className="apple-top-nav-links">
				<i class="fas fa-mobile"></i>
			</NavLink>
		</div>


	);
}