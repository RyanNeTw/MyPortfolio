import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Clear from '../assets/Clear'
import { owner } from '../services/getData'
import Article from './Article'

const Search = () => {
  const [inputValue, setInputValue] = useState(owner)
  const navigate = useNavigate()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`?search=${inputValue?.trim()}`)
    }
  }

  const clearUrl = () => {
    setInputValue(owner)
    navigate('/', { replace: true })
  }

  const content = (
    <>
      <div className="md:w-1/2 w-full flex flex-row gap-2 self-end">
        <input
          type={'text'}
          placeholder="Your github account"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent w-full text-sec outline-none border-b border-sec hover:border-pri hover:text-pri focus:text-pri focus:border-pri"
        />
        <span
          className="text-sec w-6 fill-sec hover:fill-pri cursor-pointer"
          onClick={clearUrl}
        >
          <Clear />
        </span>
      </div>
    </>
  )

  return (
    <>
      <Article
        title="Search"
        text="Search for your GitHub nickname, you won't regret it! 😁"
        reactElement={content}
      />
    </>
  )
}

export default Search
