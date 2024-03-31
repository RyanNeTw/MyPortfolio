import Footer from "../components/Footer"
import Header from "../components/Header"
import Button from "../components/UI/Button";
import Paragraphe from "../components/UI/Paragraphe";
import Title from "../components/UI/Title";

const ResumePage = () => {

    const handleDownload = () => {
        const url = 'CvRyanEzZerqti2024.pdf';
        const link = document.createElement("a");
        link.href = url;
        link.download = "CvRyanEzZerqti.pdf";
        link.click();
      };

    return (
        <>
            <div className="min-h-screen flex flex-col gap-4 justify-between">
                <Header />
                <div className="flex flex-col">
                    <Title title="My resume" />
                    <Paragraphe text="Below, you will find my resume detailing my professional and academic journey. I wish you a pleasant reading!"/>
                    <div 
                        className="self-end"
                        onClick={handleDownload}
                    >
                        <Button text="Download" />
                    </div>
                    <img 
                        src="/CvRyanEzZerqti2024.png"
                        alt="Ryan Ez Zerqti's 2024 resume"
                        className="rounded-lg mt-2"
                    />
                </div>
                <Footer />
            </div>
        </>
    )
} 

export default ResumePage