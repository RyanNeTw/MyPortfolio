import ExperiencesOrEductations from '../components/ExperiencesOrEductations'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Profil from '../components/Profil'
import {
  owner,
  useGetAccountFollowersQuery,
  useGetAccountFollowingsQuery,
  useGetAccountInfosQuery,
  useGetAchivementsQuery,
} from '../services/getData'
import { experiences } from '../objects/Experiences'
import educations from '../objects/Educations'
import projects from '../objects/Projects'
import Skills from '../components/Skills'
import skills from '../objects/Skills'
import Error from '../components/Error'
import Hero from '../components/Hero'
import Achivements from '../components/Achivements'

const AboutPage = () => {
  const { data, isLoading, error } = useGetAccountInfosQuery(owner)
  const { data: followers } = useGetAccountFollowersQuery(owner)
  const { data: followings } = useGetAccountFollowingsQuery(owner)
  const { data: achivements } = useGetAchivementsQuery(owner)

  if (isLoading) return <Loader />
  if (error || !data) return <Loader reactElement={<Error />} />

  return (
    <>
      <Header account={data?.data} />
      <section className="py-12 flex flex-col gap-8">
        <Profil
          account={data?.data}
          followers={followers?.data?.data ?? []}
          followings={followings?.data?.data ?? []}
        />
        <Hero account={data?.data} />
        <Achivements achivements={achivements ?? []} />
        <Skills subTitle={'My skills'} object={skills} />
        <ExperiencesOrEductations
          object={experiences}
          subTitle={'My experiences'}
          accordionIsOpen={true}
        />
        <ExperiencesOrEductations object={educations} subTitle={'My studies'} />
        <ExperiencesOrEductations object={projects} subTitle={'My projects'} />
      </section>
      <Footer account={data?.data} />
    </>
  )
}

export default AboutPage
