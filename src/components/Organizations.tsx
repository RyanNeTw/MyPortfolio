import { FC } from "react"
import { Organization } from "../types"
import Badge from "./UI/Badge"
import Paragraphe from "./UI/Paragraphe"
import Title from "./UI/Title"

const Organizations: FC<{orgs: Organization[]}> = ({orgs}) => {
    return (
        <>
            <div>
                <Title title={`${orgs?.length > 1 ? 'Organizations' : 'Organization'}`}/>
                <Paragraphe text="The organizations I belong to." />
                <div className="flex flex-wrap gap-2 mt-4">
                    {
                        orgs?.map((o, index) => (
                            <Org key={index} org={o} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

const Org: FC<{org: Organization}> = ({org}) => {

    const image = (<><img src={org.avatar_url} alt={org.description} className="rounded w-12" loading="lazy"/></>)
    return (
        <>
            <div>
                <Badge text={org.login} reactElement={image}/>
            </div>
        </>
    )
}

export default Organizations