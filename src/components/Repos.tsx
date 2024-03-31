import { ChangeEvent, FC, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Repo } from "../types"
import Button from "./UI/Button"
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

const NoRepos = () => {
    return(
        <div className="flex justify-center">
            <Paragraphe text="No repository found" />
        </div>
    )
}


const Repos: FC<{onlyFive?:boolean, isLoading: boolean, repositories: Repo[]}> = ({onlyFive = true, isLoading, repositories}) => {
    const location = useLocation();
    const [selectValue, setSelectValue] = useState<string>('')

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

    const repos = repositories?.slice()?.sort((a, b) => b.stargazers_count - a.stargazers_count).filter((i) => i.language?.includes(selectValue))

    const languages = repositories?.map((i) => i.language).filter((element, index, array) => {
        return array.indexOf(element) === index;
    }).filter((i) => Boolean(i)) as string[]

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setSelectValue(event.target.value);
    }

    const url = location.search?.split('=')[1]?.length ? '/repositories?search=' + location.search?.split('=')[1] : '/repositories'
    const optionStyle = "text-sec hover:text-pri focus:text-pri"
    return (
        <>
            <div className="flex flex-col">
                <Content />
                {
                    !onlyFive && languages?.length >= 2 &&
                    <>
                        <select 
                            className={`${optionStyle} transition text-center cursor-pointer appearance-none bg-transparent self-end px-4 py-1 border-b border-sec hover:border-pri focus:border-pri focus:outline-none`}
                            onChange={handleSelectChange}
                        >
                            <option value="">Filter</option>
                            {
                                languages?.map((language, index) => (
                                    <option value={language} key={index}>
                                        {language}
                                    </option>
                                ))
                            }
                        </select>  
                    </> 
                }
                <ul className="flex flex-wrap justify-between gap-y-4 mt-4">
                    {
                        repos?.slice(0, onlyFive ? 5 : repos.length).map((repo, index) => (
                            <Repository repository={repo} key={index} />
                        ))
                    }
                </ul>
                 <div className="flex flex-row justify-between items-center mt-2">
                    {onlyFive && 
                        <Link to={`${url}`}>
                            <Button text="See more" />        
                        </Link>
                    }
                    <h5 className="font-mono text-sec text-sm">{repos?.length} repositories</h5>
                </div>
               {!repos?.length && <NoRepos />}
            </div>
        </>
    )
}

export default Repos