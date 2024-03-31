import { Link } from "react-router-dom"
import Button from "./UI/Button"
import Paragraphe from "./UI/Paragraphe"
import Title from "./UI/Title"


const AboutMe = () => {

return (
    <>
        <div className="flex flex-col">
            <Title title="About me" />
            <Paragraphe text="Click to see my profile."/>
            <div className="mt-2">
                <Paragraphe    
                    text="Greetings! Allow me to introduce myself: I am a burgeoning developer located in the heart of Paris. Presently, I'm navigating through my third year at the IIM Digital School in Nanterre, all while engaging in a fulfilling apprenticeship at Billy, a pivotal hub for financial tools."
                    size={true}
                />
                <Paragraphe    
                    text="I enthusiastically encourage you to delve into my professional journey and personal endeavors. Within, you will uncover an array of captivating and groundbreaking accomplishments."
                    size={true}
                />
            </div>
            <Link to={"/about"} className="self-end mt-2">
                <Button text="More" />
            </Link>
        </div>
    </>
)
}
export default AboutMe