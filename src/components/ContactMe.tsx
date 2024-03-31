import { FC } from "react"
import { Account } from "../types"
import SendEmail from "./SendEmail";
import Socials from "./Socials"
import Paragraphe from "./UI/Paragraphe";
import Title from "./UI/Title";

const ContactMe: FC<{account: Account}> = ({account}) => {

    return (
        <>
            <section className="flex flex-col">
                <Title title="Contact me" />
                <Paragraphe text="Find me on my social networks or send me an email." />
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                    {
                        account.email && 
                        <SendEmail mail={account.email} />
                    }
                    <Socials account={account} />
                </div>
            </section>
        </>
    )
}

export default ContactMe