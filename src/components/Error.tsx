import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Fail from '../assets/Fail'
import Paragraphe from './UI/Paragraphe'

const Error = () => {
  const location = useLocation()
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    setQuery(location.search?.split('=')[1])
  }, [location])

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <div className="fill-sec w-8 hover:scale-105">
          <Fail />
        </div>
        {query ? <Paragraphe text={`Couldn't find: ${query}`} /> : null}
      </div>
    </>
  )
}

export default Error
