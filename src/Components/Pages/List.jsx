import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export const List = () => {

  const [listData, setListData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/homelands/homes`)

			setListData(result.data.items)
		}
		getData();
	}, [setListData])

  console.log(listData)
  return (
    <>
    <h2>Hej</h2>
    </>
  )
}
