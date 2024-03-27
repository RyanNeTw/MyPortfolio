import { FC, ReactElement } from "react";


const GlassMorphisme: FC<{reactElement: ReactElement}> = ({reactElement}) => {

    return(
        <>
            <div className="h-full w-full bg-bg rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-bg">
                {reactElement}
            </div>
        </>
    )
}
export default GlassMorphisme