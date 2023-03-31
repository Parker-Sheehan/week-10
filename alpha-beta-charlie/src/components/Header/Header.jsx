import React from 'react'
import style from './Header.module.css'
import Button from '../UI/Button'

const Header = () => {
  return (
    <nav className={style.super}>
        <div>
            <h1>WowSite.com</h1>
        </div>
        <div>
            <button>
                Bring up the menu
            </button>
        </div>
        <div>
            <Button>
                <h2>I'm so cool</h2>
            </Button>
        </div>
    </nav>
  )
}

export default Header