import { FC } from "react";
import { Link } from "react-router-dom";
import { Account } from "../types";
import getDate from "../utils/getDate";
import Socials from "./Socials";
import Badge from "./UI/Badge";
import Paragraphe from "./UI/Paragraphe";
import ProfilPicture from "./UI/ProfilPicture";


const Profil: FC<{account: Account}> = ({account}) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <ProfilPicture account={account} />
                    <Paragraphe text={`Since ${getDate(account.created_at)}`} size={true} />
                </div>
                <Paragraphe text={account.bio} />
                <div className="flex flex-wrap gap-4">
                    <Badge text={`${account.followers.toString()} Followers`} />
                    <Badge text={`${account.following.toString()} Followings`} />
                    <Badge text={`${account.public_repos.toString()} Public repos`} />
                    {account.total_private_repos ? <Badge text={`${account.total_private_repos.toString()} Private repos`} /> : null}
                </div>
                <Socials account={account} />
            </div>
        </>
    )
}

export default Profil