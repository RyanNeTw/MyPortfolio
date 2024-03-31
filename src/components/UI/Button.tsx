import { FC } from "react";
import Arrow from "../../assets/Arrow";


const Button: FC<{text: string}> = ({text}) => {

    return(
        <>
            <div className="flex flex-row gap-2 items-center cursor-pointer group">
                <div className="w-3 fill-pri rotate-180">
                    <Arrow />
                </div>
                <h4 className="text-sec font-mono text-sm hover:text-pri group-hover:text-pri transition">{text}</h4> 
            </div>
        </>
    )
}

export default Button