import { FC } from "react";
import { ColorEnum } from "../../types/Enums";

const Paragraphe: FC<{text: string, size?: boolean, color?: ColorEnum, addStyle?: string}> = ({text, size = false, color = ColorEnum.SECONDARY, addStyle}) => {

    return(
        <>
            <p className={`font-extralight ${size ? 'text-xs' : 'text-sm'} text-${color} font-mono ${addStyle}`}>
                {text}
            </p>
        </>
    )
}

export default Paragraphe