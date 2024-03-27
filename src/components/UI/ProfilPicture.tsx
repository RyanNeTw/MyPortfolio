import { FC } from "react";
import { Account } from "../../types";


const ProfilPicture: FC<{account: Account}> = ({account}) => {

    return (
        <>
            <div className="flex flex-row gap-2 items-center">
                <img 
                    src={account.avatar_url} 
                    alt={`${account.login}'s avatar url github`} 
                    className="rounded-lg w-12 outline outline-pri outline-offset-2 outline-1"
                />
                <div className="flex flex-row gap-1 items-center relative">
                    <a href={`${account.blog}`} target="_blank" rel="noreferrer">
                        <h3 className="text-sec font-medium font-mono hover:text-pri transition">{account.login[0].toUpperCase() + account.login.slice(1)}</h3>
                    </a>
                    {account.location?.length && <h3 className="text-sec font-mono text-xs"> - {account.location}</h3>}
                </div>
            </div>
        </>
    )

}

export default ProfilPicture