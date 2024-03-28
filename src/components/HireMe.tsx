import { FC } from "react"
import { Account } from "../types"
import SendEmail from "./SendEmail"
import Paragraphe from "./UI/Paragraphe"
import Title from "./UI/Title"

const HireMe: FC<{account: Account}> = ({account}) => {
    if (!account.hireable) return null

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <Title title="Hire me" />
                    <span className="text-2xl handShake">🤚</span>
                </div>
                <Paragraphe text='I am available to create the perfect web experience for you.' />
                {
                    account.email ? 
                    <div className="self-end mt-4">
                        <SendEmail mail={account.email} text="Hire me" />
                    </div>
                    : null
                }
            </div>
        </>
    )
}

export default HireMe