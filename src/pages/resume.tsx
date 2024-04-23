import Article from '../components/Article'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from '../components/UI/Button'

const ResumePage = () => {
  const handleDownload = () => {
    const url = 'CvRyanEzZerqti2024.pdf'
    const link = document.createElement('a')
    link.href = url
    link.download = 'CvRyanEzZerqti.pdf'
    link.click()
  }

  const buttonDownload = (
    <>
      <div className="self-end animate-bounce" onClick={handleDownload}>
        <Button text="Download" />
      </div>
    </>
  )

  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 justify-between">
        <Header />
        <div className="flex flex-col">
          <Article
            title="My resume"
            text="Below, you will find my resume detailing my professional and academic journey. I wish you a pleasant reading!"
            reactElement={buttonDownload}
          />
          <img
            src="/CvRyanEzZerqti2024.png"
            alt="Ryan Ez Zerqti's 2024 resume"
            className="rounded-lg"
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ResumePage
