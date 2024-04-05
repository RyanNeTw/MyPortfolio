import { FC } from 'react'
import { Link } from 'react-router-dom'
import Heart from '../assets/Heart'
import Logo from '../assets/Logo'
import { owner } from '../services/getData'
import { Account } from '../types'
import Paragraphe from './UI/Paragraphe'

const Header: FC<{ account?: Account }> = ({ account }) => {
  const style = 'font-mono text-sm'
  return (
    <>
      <header className="w-auto py-2 px-4 mt-2 bg-bgd rounded-lg">
        <nav className="flex flex-row justify-between items-center">
          <Link
            to={'/'}
            className="flex flex-row gap-2 items-center text-sec hover:text-pri transition"
          >
            <div className="rotate-45">
              <Logo />
            </div>
            <h1 className={`${style}`}>{account?.login ?? owner}</h1>
          </Link>
          <div className="flex flex-row gap-2">
            <Paragraphe text="Thanks for visiting" size={true} />
            <div className="fill-pri w-4">
              <Heart />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
