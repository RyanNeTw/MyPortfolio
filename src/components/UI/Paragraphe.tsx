import { FC, useEffect, useState } from 'react'
import { ColorEnum } from '../../types/Enums'
import guessEmojiFromText from '../../utils/guessEmojiFromText'

const Paragraphe: FC<{
  text: string
  size?: boolean
  color?: ColorEnum
  addStyle?: string
}> = ({ text, size = false, color = ColorEnum.SECONDARY, addStyle }) => {
  const [paragraph, setParagraph] = useState<string>(text)

  useEffect(() => {
    const fetchEmojiText = async () => {
      const textWithEmojis = await guessEmojiFromText(text)
      setParagraph(textWithEmojis)
    }

    fetchEmojiText()
  }, [text])

  return (
    <>
      <p
        className={`font-extralight ${size ? 'text-xs' : 'text-sm'} text-${color} font-mono ${addStyle}`}
      >
        {paragraph}
      </p>
    </>
  )
}

export default Paragraphe
