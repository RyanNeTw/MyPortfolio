import { FC } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo"
import { owner } from "../services/getData"
import { Account } from "../types"

const Header: FC<{account?: Account}> = ({account}) => {

    const style = 'font-mono font-xs'
    const linkStyle = 'text-sec hover:text-pri transition'
    return (
        <>  
            <header className="w-full py-2 px-4 mt-2 bg-bgd rounded-lg">
                <nav className="flex flex-row justify-between">
                    <Link to={"/"} className="flex flex-row gap-2 items-center text-sec hover:text-pri transition">
                        <div className="rotate-45">
                            <Logo />
                        </div>
                        <h1 className={`${style}`}>{account?.name ?? account?.login ?? owner}</h1>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header