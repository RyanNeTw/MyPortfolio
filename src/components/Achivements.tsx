import { FC } from 'react'
import Article from './Article'

const Achivements: FC<{ achivements: string[] }> = ({ achivements }) => {
  if (achivements?.length === 0) return null

  const content = (
    <>
      <ul className="flex flex-wrap gap-x-2">
        {achivements?.map((a, index) => (
          <li key={index}>
            <img
              src={a}
              alt={`Github achivement : ${a.split('/')[4].replaceAll('-', ' ')}`}
              className="w-24 hover:scale-105 transition"
            />
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <>
      <Article
        title="Achivements"
        text="My github achivements."
        reactElement={content}
      />
    </>
  )
}

export default Achivements
