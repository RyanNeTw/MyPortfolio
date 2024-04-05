import { FC } from 'react'

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h2 className="font-medium text-pri font-mono text-3xl">{title}</h2>
    </>
  )
}

export default Title
