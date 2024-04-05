import { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo'

const Loader: FC<{ reactElement?: ReactElement }> = ({ reactElement }) => {
  const navigate = useNavigate()

  const clearUrl = () => {
    navigate('/', { replace: true })
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-2">
        <div
          className="flex flex-row gap-2 justify-center items-center cursor-pointer"
          onClick={clearUrl}
        >
          <h2 className="text-thi font-mono font-medium text-2xl">
            RyanTw
            <span className="text-lg pl-2 font-thin">Portfolio</span>
          </h2>
          <Logo />
        </div>
        {reactElement}
      </div>
    </>
  )
}

export default Loader
