import { FC } from "react";

const Paragraphe: FC<{text: string, size?: boolean}> = ({text, size = false}) => {

    return(
        <>
            <p className={`font-extralight ${size ? 'text-xs' : 'text-sm'} text-sec font-mono`}>{text}</p>
        </>
    )
}

export default Paragraphe