import { Emoji } from '../types'

const access_key = '2ccad462fb1e8e174cf78555dad536cf8490466c'

const fetchEmojiByName = async (search: string): Promise<Emoji | null> => {
  const res = await fetch(
    `https://emoji-api.com/emojis?access_key=${access_key}&search=${search}`
  )
  if (!res.ok) return null

  const emoji = await res.json()
  return !!emoji[0] ? emoji[0] : null
}

const guessEmojiFromText = async (text: string): Promise<string> => {
  if (!text) return text

  const words = text.split(' ')
  const wordsWithEmojis = await Promise.all(
    words.map(async (word) => {
      if (word.startsWith(':') && word.endsWith(':')) {
        const emojiStr = word.substring(1, word.length - 1)
        const emoji = await fetchEmojiByName(emojiStr)
        return !!emoji ? emoji.character : ''
      }
      return word
    })
  )

  return wordsWithEmojis.join(' ')
}

export default guessEmojiFromText
