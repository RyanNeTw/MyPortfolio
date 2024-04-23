import SkillsIcons from './types/skillsIcons'

export type Data<T> = {
  status: number
  data: T
}

export type Array<T> = {
  status: number
  data: T[]
}

export type GitHubAccount = Data<Account>
export type GitHubAccountSocial = Array<Social>
export type GitHubAccountRepos = Array<Repo>
export type GitHubAccountOrgs = Data<{ data: Organization[] }>

//Available either for the followings
export type GitHubAccountFollwers = Data<{ data: Follower[] }>

export type Emoji = {
  slug: string
  character: string
  unicodeName: string
  codePoint: string
  group: string
  subGroup: string
}
export type Emojis = Emoji[]

export type Social = {
  provider: string
  url: string
}

export type Organization = {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: string
}

export type Account = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: boolean
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: Date
  private_gists: number
  total_private_repos: number
  owned_private_repos: number
  disk_usage: number
  collaborators: number
  two_factor_authentication: boolean
  plan: Plan
}

type Plan = {
  name: string
  space: number
  collaborators: number
  private_repos: number
}

export type Repo = {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: Owner
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: Date
  pushed_at: Date
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: null | string
  size: number
  stargazers_count: number
  watchers_count: number
  language: null | string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  forks_count: number
  mirror_url: null
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: null
  allow_forking: boolean
  is_template: boolean
  web_commit_signoff_required: boolean
  topics: string[]
  visibility: Visibility
  forks: number
  open_issues: number
  watchers: number
  default_branch: DefaultBranch
  permissions: Permissions
}

enum DefaultBranch {
  Main = 'main',
  Master = 'master',
}

type Owner = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

type Permissions = {
  admin: boolean
  maintain: boolean
  push: boolean
  triage: boolean
  pull: boolean
}

enum Visibility {
  Public = 'public',
}

export enum ExperienceEnum {
  INTERSHIP = 'Internship',
  FREELANCE = 'Freelance',
  APPRENTICESHIP = 'Apprenticeship',
  BLOG = 'Blog',
  DEVELOPPER = 'Developper',
}

export type Experience = {
  place: string
  role: string
  description: string
  time?: string
  image_link: string
  image_alt: string
  type?: ExperienceEnum
  date_start: string
  date_end?: string
  language?: string[]
  website: string
}

export type Skill = {
  image_link?: string
  language_name: SkillsIcons | string
  website: string
}

export type Follower = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}
