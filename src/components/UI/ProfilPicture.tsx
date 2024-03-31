import { FC } from "react";
import Company from "../../assets/Company";
import { Account } from "../../types";
import guessCountryCodeFromLocation from "../../utils/guessCountryCodeFromLocation";


const ProfilPicture: FC<{account: Account}> = ({account}) => {
    const countryCode = guessCountryCodeFromLocation(account?.location)
    
    return (
        <>
            <div className="flex flex-row gap-4 items-center">
                <img 
                    src={account.avatar_url} 
                    alt={`${account.login}'s avatar url github`} 
                    className="rounded-lg w-12 outline outline-pri outline-offset-2 outline-1"
                    loading="lazy"
                />
                <div>
                    <div className="flex flex-row gap-1 items-center relative">
                        <a href={`${account.blog}`} target="_blank" rel="noreferrer">
                            <h3 className="text-sec font-medium font-mono hover:text-pri transition">{account.login[0].toUpperCase() + account.login.slice(1)}</h3>
                        </a>
                        {account.location?.length && 
                            <>
                                <span className="text-sec font-mono text-xs">-</span>
                                {countryCode ? <img src={`https://flagsapi.com/${countryCode}/shiny/64.png`} className="w-4"></img> : null}
                                <h3 className="text-sec font-mono text-xs"> {account.location}</h3>
                            </>
                        }
                    </div>
                    {
                        account?.company ? 
                        <>
                            <div className="flex flex-row items-start gap-1">
                                <div className="fill-sec w-3"><Company /></div>
                                <h3 className="text-sec font-mono text-xs">{account.company}</h3>
                            </div>
                        </> : null
                    }
                </div>
            </div>
        </>
    )

}

export default ProfilPicture