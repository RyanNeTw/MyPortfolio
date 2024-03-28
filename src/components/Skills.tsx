import { FC } from "react"
import { Skill } from "../types"
import Accordion from "./UI/Accordion"


const Skills: FC<{subTitle: string, object: Skill[]}> = ({subTitle, object}) => {

    return(
        <>
            <>
                <Accordion subTitle={subTitle} reactElement={<List object={object}/>} />
            </>
        </>
    )
}

const Element: FC<{element: Skill}> = ({element}) => {

    return(
        <>
            <a href={element.website} target="_blank" rel="noreferrer" className="flex flex-col justify-between hover:scale-105 transition">
                <img 
                    src={element.image_link}
                    alt={element.image_alt}
                    className="rounded-lg w-12 self-center"
                    loading="lazy"
                />
                <h5 className="font-mono text-xs text-sec self-center">{element.language_name}</h5>
            </a>
        </>
    )
}

const List: FC<{object: Skill[]}> = ({object}) => {
    return (
        <>
            <div className="flex flex-wrap gap-4">
                {
                    object?.map((o, index) => (
                        <Element element={o} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default Skills