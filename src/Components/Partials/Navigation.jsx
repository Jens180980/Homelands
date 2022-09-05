import { NavLink } from "react-router-dom"

export const Navigation = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to="/" >Forside</NavLink></li>
				<li><NavLink to="/list">Huse til salg</NavLink></li>
				<li><NavLink to="/details">Detaljer</NavLink></li>
			</ul>
		</nav>
	)
}