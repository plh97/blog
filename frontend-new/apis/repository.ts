import { FETCH_REPOSITORY_LIST } from '@/constants'
import AxiosOrLocal from '@/utils/axiosOrLocal'

// fetchRepositoryList
export const fetchRepositoryList = () =>
	AxiosOrLocal({
		url: '/graphql',
		method: 'post',
		data: {
			query: `{
				repositoryOwner(login: "pengliheng") {
					repositories(last: 100,isFork:false,orderBy:{field:UPDATED_AT,direction:DESC}) {
						edges {
							node {
								object(expression: "master") {
									... on Commit {
										history {
											totalCount
										}
									}
								}
								repositoryTopics(first:3) {
									edges {
										node {
											url
											topic {
												name
											}
										}
									}
								}
								url
								description
								homepageUrl
								nameWithOwner
								updatedAt
								forkCount
								primaryLanguage {
									name
									color
								}
								stargazers {
									totalCount
								}
							}
						}
					}
				}
			}`
		}
	})

// fetchRepositoryDetail
export const fetchRepositoryDetail = (keyWord: string) =>
	AxiosOrLocal({
		url: '/graphql',
		method: 'post',
		data: {
			query: `{
				search(first: 1, query: "repo:${keyWord}", type: REPOSITORY) {
					edges {
						node {
							... on Repository {
								nameWithOwner
								object(expression: "master:README.md") {
									... on Blob {
										text
									}
								}
							}
						}
					}
				}
			}`
		}
	})
