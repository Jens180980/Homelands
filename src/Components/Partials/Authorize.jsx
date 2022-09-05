import { createContext, useEffect, useState } from "react";

const AuthContent = createContext();

const AuthWrapper = ({ children }) => {
	const [loginData, setLoginData] = useState('')

	useEffect(() => {
		if(sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children])

	return (
		<AuthContent.Provider value={{loginData,setLoginData}}>
			{children}
		</AuthContent.Provider>
	)
}

export { AuthContent, AuthWrapper }
