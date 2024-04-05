import { FC } from 'react'

const Skelton: FC<{ size: string }> = ({ size }) => {
  return (
    <>
      <div
        className={`flex items-center justify-center ${size} bg-stone-900 rounded-lg animate-pulse`}
      ></div>
    </>
  )
}

export default Skelton
