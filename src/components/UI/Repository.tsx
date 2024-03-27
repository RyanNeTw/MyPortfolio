import { FC } from "react";
import Stars from "../../assets/Stars";
import { Repo } from "../../types";
import getDate from "../../utils/getDate";
import Badge from "./Badge";
import Paragraphe from "./Paragraphe";

const Repository: FC<{repository: Repo}> = ({repository}) => {


    return (
        <>  
            <a 
                href={repository.html_url} 
                target="_blank" 
                rel="noreferrer"
                className="flex flex-col gap-4 justify-between border border-sec rounded-lg hover:scale-105 transition w-full md:w-mid py-2 px-4"
            >
                    <div>
                        <h3 className="text-sec font-mono font-semibold">
                            {repository.name[0].toUpperCase() + repository.name.replaceAll('-', ' ')?.trim()?.slice(1)}
                        </h3>
                        {repository.description && <Paragraphe text={repository.description} size={true}/>}
                    </div>
                <div className="w-full flex flex-col items-start">
                    {repository.language && <Badge text={`${repository.language}`} />}
                    <div className="flex flex-row justify-between items-end w-full">
                        <h4 className="text-sec text-xs">{getDate(repository.created_at)}</h4>
                        <Badge text={`${repository.stargazers_count}`} reactElement={<Stars />} />
                    </div>
                </div>
            </a>
        </>
    )
}

export default Repository