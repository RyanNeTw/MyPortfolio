import { FC } from 'react'
import Button from './UI/Button'

const SendEmail: FC<{ mail: string; text?: string }> = ({ mail, text }) => {
  function openEmailClient() {
    const mailtoLink = `mailto:${mail}`
    window.open(mailtoLink)
  }

  return (
    <>
      <div onClick={() => openEmailClient()}>
        <Button text={text ?? mail} />
      </div>
    </>
  )
}

export default SendEmail
