import { FETCH_ARTICLE_LIST } from '@/constants'
import AxiosOrLocal from '@/utils/axiosOrLocal'

// fetchArticleList
export const fetchArticleList = () =>
	AxiosOrLocal({
		url: '/graphql',
		method: 'post',
		data: {
			query: ` {
			    repositoryOwner(login: "pengliheng") {
			        repository(name: "pengliheng.github.io") {
			            issues(first: 100, states: OPEN) {
			                edges {
			                    node {
			                        updatedAt createdAt title id
			                        author {
			                            avatarUrl login
			                        }
			                        labels(first: 5) {
			                            nodes {
			                                name color
			                            }
			                        }
			                    }
			                }
			            }
			        }
			    }
			}`
		}
	})

export const fetchArticleDetail = (keyWord: string) =>
	AxiosOrLocal({
		url: '/graphql',
		method: 'post',
		data: {
			query: `{
				search(
				  first: 10, 
				  query: "repo:pengliheng/pengliheng.github.io author:pengliheng type:Issues ${keyWord}",
				  type: ISSUE
				) {
				  edges {
					node {
					  ... on Issue {
						body title
					  }
					}
				  }
				}
			}`
		}
	})
