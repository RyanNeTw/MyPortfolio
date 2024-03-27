import { FC } from "react";

const SendEmail: FC<{mail: string, text?: string}> = ({mail, text}) => {
    
    function openEmailClient() {
        const mailtoLink = `mailto:${mail}`;
        window.open(mailtoLink);
      }
    
    return (
        <>
            <h3 className="text-sec font-mono text-sm underline cursor-pointer hover:text-pri transition" onClick={() => openEmailClient()}>
                {text ?? mail}
            </h3>
        </>
     )
}

export default SendEmail