import { FC, ReactElement } from "react"

const Badge: FC<{text: string, reactElement?: ReactElement}> = ({text, reactElement}) => {

    return(
        <>
            <div className="bg-bgd flex flex-row gap-2 rounded px-2 py-1 hover:bg-bgd text-sec border border-sec hover:text-bgd hover:border-pri hover:bg-pri hover:scale-110 transition cursor-pointer fill-pri hover:fill-bgd">
                <h4 className="font-mono text-xs font-extralight">{text}</h4>
                {
                    reactElement && 
                    <div className="w-4">
                        {reactElement}
                    </div>
                }
            </div>
        </>
    )
}

export default Badge