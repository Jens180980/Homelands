import { useContext } from "react"
import { HouseCard } from "../Partials/HouseCard"
import { listContent } from "../StateManagement/ListData"
import house from '../../Assets/img/house.png'
import Style from '../../Assets/scss/List.module.scss'


export const List = () => {

  const list = useContext(listContent)


  return (
    <>
      <h2>Boliger til salg</h2>

      <section className={Style.gallery}>
        {list.listData && list.listData.map(item => {
          console.log(item)
          return(
            < HouseCard key={item.id} img={house} address={item.address} zip={item.zipcode} city={item.city} type={item.type} energy={item.energy_label_name} rooms={item.num_rooms} area={item.floor_space} price={item.price} />
          )
        }
        )}
      </section>
    </>
  )
}
