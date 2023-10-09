import { FETCH_ARTICLE_LIST } from "@/constants";
import AxiosOrLocal from "@/utils/axiosOrLocal";

// fetchArticleList
export const fetchArticleList = () =>
  AxiosOrLocal({
    url: "/graphql",
    method: "post",
    data: {
      query: ` {
			    repositoryOwner(login: "plh97") {
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
			}`,
    },
  });


// data.repositoryOwner.repository.issues.edges
interface IArticle {
  data: {
    repositoryOwner: {
      repository: {
        issues: {
          edges: {
            title: string;
            body: string;
          }
        }
      }
    }
  }
}
export const fetchArticleDetail = (keyWord: string) => {
  return AxiosOrLocal<IArticle>({
    url: "/graphql",
    method: "post",
    data: {
      query: `{
				search(
					first: 10
					query: "repo:plh97/pengliheng.github.io http"
					type: ISSUE
				) {
					edges {
						node {
							... on Issue {
								body
								title
							}
						}
					}
				}
			}`,
    },
  });
};
