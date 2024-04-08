import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  GitHubAccount,
  GitHubAccountFollwers,
  GitHubAccountOrgs,
  GitHubAccountRepos,
  GitHubAccountSocial,
} from '../types'

export const owner = `RyanNeTw`

const baseUrl = 'https://api.ryantw.net/api/user/'

export const gitHubApi = createApi({
  reducerPath: 'gitHubApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAccountInfos: builder.query<GitHubAccount, string>({
      query: (name) => `${name}`,
    }),
    getAccountSocials: builder.query<GitHubAccountSocial, string>({
      query: (name) => `${name}/socials`,
    }),
    getAccountRepos: builder.query<GitHubAccountRepos, string>({
      query: (name) => `${name}/repos`,
    }),
    getAccountOrgs: builder.query<GitHubAccountOrgs, string>({
      query: (name) => `${name}/orgs`,
    }),
    getAccountFollowers: builder.query<GitHubAccountFollwers, string>({
      query: (name) => `${name}/followers`,
    }),
    getAccountFollowings: builder.query<GitHubAccountFollwers, string>({
      query: (name) => `${name}/followings`,
    }),
    getAchivements: builder.query<string[], string>({
      query: (name) => `${name}/achivements`,
    }),
  }),
})

export const {
  useGetAccountInfosQuery,
  useGetAccountSocialsQuery,
  useGetAccountReposQuery,
  useGetAccountOrgsQuery,
  useGetAccountFollowersQuery,
  useGetAccountFollowingsQuery,
  useGetAchivementsQuery,
} = gitHubApi
