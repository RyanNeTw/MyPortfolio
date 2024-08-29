import { Experience, ExperienceEnum } from '../types'
import SkillsIcons from '../types/skillsIcons'

export const experiences: Experience[] = [
  {
    place: 'Growth & Scale Factory',
    role: 'Front Developer',
    description:
      "Creation of a Shopify template that's quick and easy to learn, as well as some work on other templates.",
    time: '3months',
    image_link:
      'https://s3-eu-west-1.amazonaws.com/tpd/logos/6420c5582e0c1ea51782a4b0/0x0.png',
    image_alt: "Growth & Scale Factory's logo",
    type: ExperienceEnum.INTERSHIP,
    date_start: '01-06-2022',
    date_end: '01-09-2022',
    language: ['Liquid', SkillsIcons.HTML, SkillsIcons.CSS, SkillsIcons.JavaScript],
    website: 'https://gsf.digital/',
  },
  {
    place: 'Growth & Scale Factory',
    role: 'Front Developer',
    description:
      "Creation of a Shopify template that's quick and easy to learn, as well as some work on other templates.",
    time: '♾️',
    image_link:
      'https://s3-eu-west-1.amazonaws.com/tpd/logos/6420c5582e0c1ea51782a4b0/0x0.png',
    image_alt: "Growth & Scale Factory's logo",
    type: ExperienceEnum.FREELANCE,
    date_start: '01-09-2022',
    date_end: '01-09-2023',
    language: ['Liquid', SkillsIcons.HTML, SkillsIcons.CSS, SkillsIcons.JavaScript],
    website: 'https://gsf.digital/',
  },
  {
    place: 'HeyBilly',
    role: 'Fullstack Developer',
    description:
      'I did a 6-month internship in a start-up where I was mainly in charge of back-end development.',
    time: '6months',
    image_link:
      'https://media.licdn.com/dms/image/D4E0BAQHXp7aOp2PMxA/company-logo_200_200/0/1666885963196?e=2147483647&v=beta&t=heBXVayFd92hskM5FllcFrWSWo1IfqqgC65mCYtbYCs',
    image_alt: "HeyBilly's logo",
    type: ExperienceEnum.INTERSHIP,
    date_start: '01-03-2023',
    date_end: '31-08-2023',
    language: [SkillsIcons.TypeScript, SkillsIcons.GraphQL, SkillsIcons.Tailwind, SkillsIcons.NextJS],
    website: 'https://heybilly.io/',
  },
  {
    place: 'HeyBilly',
    role: 'Fullstack Developer',
    description:
      'I am currently in apprenticeship at a start-up where my primary responsibility was back-end.',
    time: '1 year',
    image_link:
      'https://media.licdn.com/dms/image/D4E0BAQHXp7aOp2PMxA/company-logo_200_200/0/1666885963196?e=2147483647&v=beta&t=heBXVayFd92hskM5FllcFrWSWo1IfqqgC65mCYtbYCs',
    image_alt: "HeyBilly's logo",
    type: ExperienceEnum.APPRENTICESHIP,
    date_start: '01-09-2023',
    date_end: '31-08-2024',
    language: [SkillsIcons.TypeScript, SkillsIcons.GraphQL, SkillsIcons.Tailwind, SkillsIcons.NextJS],
    website: 'https://heybilly.io/',
  },
  {
    place: 'Hyenallc',
    role: 'Front Developer',
    description:
      `Designed & developed Hyenallc's web site.`,
    time: '1 month',
    image_link:
      '/logoHyenallc.svg',
    image_alt: "Hyenallc's logo",
    type: ExperienceEnum.FREELANCE,
    date_start: '01-05-2024',
    date_end: '01-06-2024',
    language: [SkillsIcons.React, SkillsIcons.Tailwind],
    website: 'https://hyenallc.com/',
  },
]
