import { FC } from 'react'
import { Link } from 'react-router-dom'

const Image: FC<{ imageUrl: string; url: string }> = ({ url, imageUrl }) => {
  return (
    <>
      <Link to={`?search=${url}`}>
        <img
          src={imageUrl}
          alt={`${imageUrl}'s profil avart on github`}
          loading="lazy"
          className="rounded-lg w-12 outline outline-pri outline-offset-2 outline-1"
        />
      </Link>
    </>
  )
}

export default Image
