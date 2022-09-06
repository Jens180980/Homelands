import { useContext } from "react"
import { listContent } from "../StateManagement/ListData"


export const List = () => {

  const list = useContext(listContent)

  return (
    <>
    <h2>Huse til salg</h2>

    {list.listData && list.listData.map(item => {
      console.log(item)
      return(
        <ul key={item.id}>
          <li>Adresse: {item.address}</li>
        </ul>
      )
    }
    )}

    </>
  )
}
