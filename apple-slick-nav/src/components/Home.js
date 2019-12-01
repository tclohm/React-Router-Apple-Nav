import React from 'react';
import { NavLink, Route } from "react-router-dom";
import InnerNav from "./InnerNav";
import "../App.css";

export default function Home() {
	return (
		<div>
			<InnerNav />
			<h1 className="App">Home</h1>
		</div>
	);
};