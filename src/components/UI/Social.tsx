import { FC } from "react"
import guessLogoByUrl from "../../utils/guessLogoByUrl"

const Social:FC<{url: string}> = ({url}) => {
    if (!url) return null

    const logo = guessLogoByUrl({url})

    const iconsStyle = "fill-sec w-6 hover:fill-pri transition cursor-pointer hover:scale-105"
    return (
        <>
            <a href={`${url}`} target="_blank" rel="noreferrer" className={`${iconsStyle}`}>
                {logo}
            </a>    
        </>
    )
}

export default Social