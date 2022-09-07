import React from 'react'
import vejle from '../../Assets/img/vejle.png'
import { Comments } from '../Partials/Comments'
import Style from '../../Assets/scss/Home.module.scss'
import { CommentWrapper } from '../StateManagement/CommentData'
import { EmployeeWrapper } from '../StateManagement/EmployeeData'
import { EmployeeCard } from '../Partials/EmployeeCard'

export const Home = () => {
  return (
      <section className={Style.home}> 
        <img src={vejle} alt="hero" className={Style.hero}></img>
        <div>
          <h2>Her kommer en slider</h2>
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
