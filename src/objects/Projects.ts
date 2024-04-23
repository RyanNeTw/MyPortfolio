import { Experience, ExperienceEnum } from '../types'

const projects: Experience[] = [
  {
    place: 'My Portfolio',
    role: 'Developer',
    description: `It's a portfolio based on the github api as well as other api`,
    image_link: 'https://avatars.githubusercontent.com/u/93142363?v=4',
    image_alt: "My potfolio's logo",
    type: ExperienceEnum.DEVELOPPER,
    date_start: '15-03-2024',
    language: ['ReactJs', 'Tailwind', 'Typescript'],
    website: 'https://ryantw.net',
  },
  {
    place: 'LeCodePartagé',
    role: 'Editor',
    description:
      'I manage a blog alongside friends where we explore and discuss a variety of French open-source projects.',
    time: '1 year',
    image_link:
      'https://media.licdn.com/dms/image/D5603AQFu2WL-xYHt2Q/profile-displayphoto-shrink_800_800/0/1701384527283?e=2147483647&v=beta&t=ZidoHly_BRj6Wj0Jr0FLtQKMAtD-FDirMZXZ4HagH00',
    image_alt: "Le code partagé's logo",
    type: ExperienceEnum.BLOG,
    date_start: '01-12-2023',
    language: ['ReactJs', 'Strapi', 'Tailwind', 'Typescript'],
    website: 'https://lecodepartage.fr/',
  },
]

export default projects
