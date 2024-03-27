import ExperiencesOrEductations from "../components/ExperiencesOrEductations"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loader from "../components/Loader"
import Profil from "../components/Profil"
import { owner, useGetAccountInfosQuery } from "../services/getData"
import { experiences } from "../objects/Experiences"
import educations from "../objects/Educations"
import Skills from "../components/Skills"
import skills from "../objects/Skills"
import Error from "../components/Error"


const AboutPage = () => {

    const { data, isLoading, error } = useGetAccountInfosQuery(owner)

    if (isLoading) return <Loader />
    if (error || !data) return  <Loader reactElement={<Error />} />

    return (
        <>
            <Header account={data?.data} />
            <section className="py-12 flex flex-col gap-8">
                <Profil account={data?.data} />
                <ExperiencesOrEductations object={educations} subTitle={"My studies"} accordionIsOpen={true}/>
                <ExperiencesOrEductations object={experiences} subTitle={"My experiences"}/>
                <Skills subTitle={"My skills"} object={skills} />
            </section>
            <Footer account={data?.data} />
        </>
    )
}

export default AboutPage