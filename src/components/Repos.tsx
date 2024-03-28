import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { Repo } from "../types"
import Paragraphe from "./UI/Paragraphe"
import Repository from "./UI/Repository"
import Skelton from "./UI/Skelton"
import Title from "./UI/Title"

const Content = () =>  {
    return(
        <>
            <Title title="Repos" />
            <Paragraphe text="My github public repositories." />
        </>
    )
}


const Repos: FC<{onlyFive?:boolean, isLoading: boolean, repositories: Repo[]}> = ({onlyFive = true, isLoading, repositories}) => {
    const location = useLocation();

    if (isLoading || !repositories) {
        return (
            <>
                <Content />
                <div className="flex flex-wrap justify-between gap-y-4 mt-4">
                    <Skelton size="h-56 w-full md:w-mid" />
                    <Skelton size="h-56 w-full md:w-mid" />
                </div> 
            </>
        )
    }

    const repos = repositories?.slice()?.sort((a, b) => b.stargazers_count - a.stargazers_count)

    const url = location.search?.split('=')[1]?.length ? '/repositories?search=' + location.search?.split('=')[1] : '/repositories'
    return (
        <>
            <div>
                <Content />
                <ul className="flex flex-wrap justify-between gap-y-4 mt-4">
                    {
                        repos?.slice(0, onlyFive ? 5 : repos.length).map((repo, index) => (
                            <Repository repository={repo} key={index} />
                        ))
                    }
                </ul>
               {
                repos?.length > 5 && 
                    ( 
                        <div className="flex flex-row justify-between items-center mt-2">
                            {onlyFive && <Link to={`${url}`} className="text-sec font-mono text-xs hover:underline hover:text-pri transition">See more</Link>}
                            <h5 className="font-mono text-sec text-xs">{repos?.length} repositories</h5>
                        </div>
                    )
               }
               { !repos?.length && 
                    <div className="flex justify-center">
                        <Paragraphe text="No repository found" />
                    </div>
               }
            </div>
        </>
    )
}

export default Repos