import React from 'react'
import vejle from '../../Assets/img/vejle.png'
import { Comments } from '../Partials/Comments'
import { Employees } from '../Partials/Employees'
import Style from '../../Assets/scss/Home.module.scss'
import { CommentWrapper } from '../StateManagement/CommentData'

export const Home = () => {
  return (
    <CommentWrapper>
      <section className={Style.home}> 
        <img src={vejle} alt="hero" className={Style.hero}></img>
        <div>
          <h2>Her kommer en slider</h2>
        </div>
        <Comments />
        <Employees />
      </section>
    </CommentWrapper>
  )
}
