import { useState, useContext, useEffect } from "react";
import axios from 'axios'
import { SearchContent } from "../StateManagement/SearchData";
import { authHeader } from '../StateManagement/Authorize'

export const SearchResult = () => {
	const { searchData }  = useContext(SearchContent);
    const [ searchResult, setSearchResult ] = useState([])

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/homelands/search/${searchData}`, { headers: authHeader() })
			setSearchResult(result.data)
		}
		getData();
	}, [searchData])

    console.log(searchResult)

	return (
		<section>
			
		</section>
	)
}