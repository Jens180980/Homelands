import { useContext }from 'react'
import vejle from '../../Assets/img/vejle.png'
import { Comments } from '../Partials/Comments'
import Style from '../../Assets/scss/Home.module.scss'
import { CommentWrapper } from '../StateManagement/CommentData'
import { EmployeeWrapper } from '../StateManagement/EmployeeData'
import { EmployeeCard } from '../Partials/EmployeeCard'
import { HouseCard } from '../Partials/HouseCard'
import { listContent } from '../StateManagement/ListData'
import house from '../../Assets/img/house.png'

export const Home = () => {

  const {listData} = useContext(listContent)
  console.log(listData)

  return (
      <section className={Style.home}> 
        <img src={vejle} alt="hero" className={Style.hero}></img>
        <div className={Style.gallery}>
          {listData && listData.slice(0, 3).map(item => {
            return (
            < HouseCard key={item.id} img={house} address={item.address} zip={item.zipcode} city={item.city} type={item.type} energy={item.energy_label_name} rooms={item.num_rooms} area={item.floor_space} price={item.price} />
            )
          })}
        </div>
        <CommentWrapper>
          <Comments />
        </CommentWrapper>
        <EmployeeWrapper>
          <EmployeeCard />
        </EmployeeWrapper> 
      </section>

  )
}
