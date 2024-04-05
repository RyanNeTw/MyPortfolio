import { FC, ReactElement, useState } from 'react'
import Arrow from '../../assets/Arrow'
import Title from './Title'

const Accordion: FC<{
  reactElement: ReactElement
  title?: string
  subTitle: string
  accordionIsOpen?: boolean
}> = ({ reactElement, title, subTitle, accordionIsOpen = false }) => {
  const [isOpen, setIsOpen] = useState<boolean>(accordionIsOpen)

  return (
    <>
      {title && <Title title={title} />}
      <div className="w-full flex flex-col gap-4">
        <div
          className="flex flex-row justify-between items-center cursor-pointer border-b border-pri"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-mono text-pri">{subTitle}</h3>
          <div className={`w-3 fill-pri ${isOpen && '-rotate-90'}`}>
            <Arrow />
          </div>
        </div>
        {isOpen && reactElement}
      </div>
    </>
  )
}

export default Accordion
