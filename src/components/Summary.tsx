import { FC } from "react"
import { Repo } from "../types"
import Loader from "./Loader"
import Paragraphe from "./UI/Paragraphe"
import PieChart from "./UI/PieChart"
import Skelton from "./UI/Skelton"
import Title from "./UI/Title"


const Content = () => {
    return(
        <>
            <div>
                <Title title="Summary" />
            </div>
        </>
    )   
}

const Summary: FC<{isLoading: boolean, repositories: Repo[]}> = ({isLoading, repositories}) => {

    if (isLoading || !repositories) {
        return (
            <>
                <Content />
                <div className="flex flex-wrap justify-between gap-y-4 mt-4">
                    <Skelton size="h-56 w-mid" />
                    <Skelton size="h-56 w-mid" />
                </div> 
            </>
        )
    }

    if (!repositories?.length) return null

    const repos = repositories.slice()?.sort((a, b) => b.stargazers_count - a.stargazers_count)
    const languages = repos?.map(repo => repo.language).filter(Boolean) as string[]

    return (
        <>
            <div className="flex flex-col">
                <Content />
                <div className="w-full flex flex-col gap-2">
                    <div className="md:w-1/2 w-full">
                        <Paragraphe text="Here are the languages I used the most during the development of my repos."/>
                    </div>
                  {
                    isLoading || !repositories ? 
                        <Loader /> : 
                        (  
                            <div  className="md:w-1/2 w-full gap-2 self-end">
                                <PieChart languages={languages} />
                            </div>
                        )
                  }
                </div>
            </div>
        </>
    )
}

export default Summary