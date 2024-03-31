import { FC } from "react"
import { Link } from "react-router-dom"
import Alert from "../assets/Alert"
import { owner } from "../services/getData"
import { Account } from "../types"
import Button from "./UI/Button"
import Paragraphe from "./UI/Paragraphe"

const Hero: FC<{account: Account}> = ({account}) => {
    if (!account.hireable || account.login !== owner) return null

    return(
        <>
            <div className="group border border-pri rounded-lg px-4 py-2 outline outline-offset-2 outline-1 outline-pri hover:scale-105 transition flex flex-col">
                <div>
                    <div className="w-5 float-left mr-2 fill-pri group-hover:scale-105">
                            <Alert />
                    </div>
                    <Paragraphe 
                        text="Hello, I'm looking for a apprenticeship position as a full stack developer for September 2024. Available to discuss opportunities or receive help in my search. Thank you!"
                        addStyle="clear-none"
                    />
                </div>
                <Link to={"/about"} className="self-end">
                    <Button text="About me"/>
                </Link>
            </div>
        </>
    )
}

export default Hero