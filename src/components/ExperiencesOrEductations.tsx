import { FC } from "react"
import { Experience } from "../types"
import getDate from "../utils/getDate"
import Accordion from "./UI/Accordion"
import Badge from "./UI/Badge"
import Paragraphe from "./UI/Paragraphe"

const ExperiencesOrEductations: FC<{object: Experience[], subTitle: string, accordionIsOpen?: boolean}> = ({object,subTitle, accordionIsOpen}) => {

    return(
        <>
            <Accordion subTitle={subTitle} reactElement={<List object={object}/>} accordionIsOpen={accordionIsOpen} />
        </>
    )
}
const Element: FC<{object: Experience}>  = ({object}) => {
    return (
        <>
            <a href={object.website} target="_blank" rel="noreferrer">
                <div className="flex flex-col gap-2 hover:scale-105 transition">
                    <div className="flex flex-row gap-2">
                        <img src={object.image_link} alt={object.image_alt} className="rounded-lg w-12 outline outline-sec outline-offset-2 outline-1"/>
                        <div>
                            <h5 className="font-mono text-xs text-sec">{object.place}</h5>
                            <h5 className="font-mono text-xs text-sec">{object.role}</h5>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-mono text-xs text-sec">{object.type}</h5>
                        <Paragraphe size={true} text={object.description} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {
                            object?.language?.map((l, index) => (
                                <Badge text={l} key={index}/>
                            ))
                        }
                    </div>
                    <h5 className="font-mono text-xs text-sec self-end">{getDate(object.date_start)} {object?.date_end && `to ${getDate(object?.date_end)}`}</h5>
                </div>
            </a>
        </>
    )
}

const List: FC<{object: Experience[]}>  = ({object}) => {
    return (
        <>
            <ul className="flex flex-col gap-4">
                {
                    object?.map((o, index) => (
                        <Element object={o} key={index} />
                    ))
                }
            </ul>
        </>
    )
}

export default ExperiencesOrEductations