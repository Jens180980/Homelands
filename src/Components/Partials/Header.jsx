import React from 'react'
import { Navigation } from '../Partials/Navigation'
import Style from '../../Assets/scss/Header.module.scss'

export const Header = () => {
  return (
    <header className={Style.header}>
      <section>
        <div className={Style.logo}>
          <h1>Homelands</h1>
        </div>
        <Navigation />
      </section>
    </header>
  )
}
