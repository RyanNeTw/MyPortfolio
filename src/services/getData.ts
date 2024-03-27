import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GitHubAccount, GitHubAccountOrgs, GitHubAccountRepos, GitHubAccountSocial } from '../types'

export const owner = `RyanNeTw`

export const gitHubApi = createApi({
    reducerPath: 'gitHubApi',
    tagTypes: ['comments'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ryantw.net/api/user/' }),
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
    }),
})

export const {
    useGetAccountInfosQuery,
    useGetAccountSocialsQuery,
    useGetAccountReposQuery,
    useGetAccountOrgsQuery
} = gitHubApi