import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Button from "../components/UI/Button"
import Paragraphe from "../components/UI/Paragraphe"
import Title from "../components/UI/Title"


const ErrorPage = () => {

    return(
        <>
            <div className="min-h-screen flex flex-col justify-between">
                <Header />
                <div className="flex flex-col">
                    <Title title="Error" />
                    <Paragraphe text="Oops, I think you've landed on the wrong page." />
                    <Link to={"/"} className="self-end m-2">
                        <Button text="Come back" />
                    </Link>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ErrorPage