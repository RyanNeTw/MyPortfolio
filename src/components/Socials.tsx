import { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { owner, useGetAccountSocialsQuery } from "../services/getData"
import { Account } from "../types"
import Skelton from "./UI/Skelton"
import Social from "./UI/Social"

const Socials: FC<{account: Account}> = ({account}) => {

    const location = useLocation();
    const [query, setQuery] = useState<string>(owner)

    useEffect(() => {
        setQuery(location.search?.split('=')[1]?.length ? location.search?.split('=')[1] : owner)
    },[location])

    const { data, isLoading } = useGetAccountSocialsQuery(query)
    if (isLoading || !data?.data) {
        return(
            <>
                <div className="flex flex-row gap-4 items-center">
                    <Skelton size="w-8 h-8" />
                    <Skelton size="w-8 h-8" />
                    <Skelton size="w-8 h-8" />
                </div>
            </>
        )
    }

    return(
        <>
          <div className="flex flex-row gap-4 items-center">
                    <Social url={account.html_url} />
                    <Social url={account.blog} />
                    {
                        data?.data?.map((social, index) => (
                            <Social url={social.url} key={index} />
                        ))
                    }
            </div>
        </>
    )
}

export default Socials