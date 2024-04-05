const getTextAsTitle = (text: string): string | null => {
  if (!text) return null
  return text[0].toUpperCase() + text.slice(1)
}

export default getTextAsTitle
