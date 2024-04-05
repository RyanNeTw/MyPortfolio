import { CountryCode, isCountry } from '../types/isCountry'

const guessCountryCodeFromLocation = (location: string): string | null => {
  if (!location) return null
  location = location.replaceAll('é', 'e')

  let country: string | null = isCountry(location) ? location : null
  let array: string[] = []

  if (location.includes(',')) {
    array = location.split(',')
  }

  if (location.includes(' ')) {
    array = location.split(' ')
  }

  if (location.includes('/')) {
    array = location.split('/')
  }

  if (location.includes('-')) {
    array = location.split('-')
  }

  country = array?.filter((i) => isCountry(i.trim()))[0]
  const countryCode = CountryCode[country?.trim() as keyof typeof CountryCode]

  return !!countryCode ? countryCode : null
}

export default guessCountryCodeFromLocation
