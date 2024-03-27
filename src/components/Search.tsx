import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Clear from "../assets/Clear";
import { owner } from "../services/getData";
import Paragraphe from "./UI/Paragraphe"
import Title from "./UI/Title"


const Search = () => {
    const [inputValue, setInputValue] = useState(owner)
    const navigate = useNavigate()
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          navigate(`?search=${inputValue}`);
        }
    }

    const clearUrl = () => {
        setInputValue(owner)
        navigate('/', { replace: true });
      };

    return(
        <>
            <div>
                <Title title="Search" />
                <div className="w-full flex flex-wrap items-center">
                    <div className="md:w-1/2 w-full">
                        <Paragraphe text="Search for your GitHub nickname, you won't regret it! 😁" />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-row gap-2 items-end">
                        <input 
                            type={"text"} 
                            placeholder="Your Github nickname"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent w-full text-sec outline-none border-b border-sec focus:text-pri focus:border-pri"
                        />
                        <span className="text-sec w-6 fill-sec hover:fill-pri cursor-pointer" onClick={clearUrl}>
                            <Clear />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search