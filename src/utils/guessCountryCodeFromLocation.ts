import { CountryCode, isCountry } from "../types/isCountry"


const guessCountryCodeFromLocation = (location: string): string | null=> {
    if (!location) return null
    location = location.replaceAll("é", "e")

    let country: string | null = isCountry(location.replace("é", "e")) ? location : null

    if (location.includes(",")) {
        const locationArrayByComma = location.split(",")
        country = locationArrayByComma?.filter((i) => isCountry(i.trim()))[0]
    }

    if (location.includes(" ")) {
        const locationArrayByComma = location.split(" ")
        country = locationArrayByComma?.filter((i) => isCountry(i.trim()))[0]
    }

    if (location.includes("/")) {
        const locationArrayByComma = location.split("/")
        country = locationArrayByComma?.filter((i) => isCountry(i.trim()))[0]
    }

    if (location.includes("-")) {
        const locationArrayByComma = location.split("-")
        country = locationArrayByComma?.filter((i) => isCountry(i.trim()))[0]
    }

    const countryCode = CountryCode[country?.trim() as keyof typeof CountryCode]
    return !!countryCode ? countryCode : null
}
export default guessCountryCodeFromLocation