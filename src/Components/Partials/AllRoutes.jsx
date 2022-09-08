import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { List } from '../Pages/List'
import  { Login } from '../Pages/Login'
import { Details } from '../Pages/Details'


export const AllRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />}></Route>
			<Route path="/list">
				<Route index element={<List/>}></Route>
        		<Route path=":home_id" element={<Details/>}/>
			</Route>
			<Route path="/login" element={<Login />}></Route>
		</Routes>
	)
}

