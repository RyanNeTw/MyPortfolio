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

  if (country) {
    const countryCode =
      CountryCode[
        (country[0].toUpperCase() +
          country
            ?.slice(1)
            .trim()
            .replace(/[^\w\s]/gi, '')) as keyof typeof CountryCode
      ]
    return !!countryCode ? countryCode : null
  }

  country = array?.filter((i) =>
    isCountry(
      i[0]?.toUpperCase() +
        i
          .slice(1)
          .trim()
          .replaceAll(/[^\w\s]/gi, '')
    )
  )[0]
  if (!country) return null

  const countryCode =
    CountryCode[
      (country[0].toUpperCase() +
        country
          ?.slice(1)
          .trim()
          .replace(/[^\w\s]/gi, '')) as keyof typeof CountryCode
    ]
  return !!countryCode ? countryCode : null
}

export default guessCountryCodeFromLocation
