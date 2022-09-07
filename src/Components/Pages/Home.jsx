import React from 'react'
import vejle from '../../Assets/img/vejle.png'
import { Comments } from '../Partials/Comments'
import Style from '../../Assets/scss/Home.module.scss'
import { CommentWrapper } from '../StateManagement/CommentData'
import { EmployeeWrapper } from '../StateManagement/EmployeeData'
import { EmployeeCard } from '../Partials/EmployeeCard'
import { Slider } from '../Partials/Slider'

export const Home = () => {
  return (
      <section className={Style.home}> 
        <img src={vejle} alt="hero" className={Style.hero}></img>
        <Slider />
        <CommentWrapper>
          <Comments />
        </CommentWrapper>
        <EmployeeWrapper>
          <EmployeeCard />
        </EmployeeWrapper> 
      </section>

  )
}
