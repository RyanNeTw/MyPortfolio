import { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'
import { owner } from '../services/getData'
import { Account } from '../types'
import Paragraphe from './UI/Paragraphe'

const Footer: FC<{ account?: Account }> = ({ account }) => {
  return (
    <>
      <footer className="w-full py-2 px-4 mb-2 bg-bgd rounded-lg">
        <nav className="flex flex-row justify-between items-center">
          <Link
            to={'/'}
            className="flex flex-row gap-2 items-center text-sec hover:text-pri transition"
          >
            <div className="rotate-45">
              <Logo />
            </div>
            <h2 className="font-mono text-sm">{account?.login ?? owner}</h2>
          </Link>
          <Paragraphe text="Copyright © 2024" size={true} />
        </nav>
      </footer>
    </>
  )
}

export default Footer
