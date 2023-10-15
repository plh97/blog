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
			        repository(name: "blog") {
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
  });

interface IArticle {
  data: {
    repositoryOwner: {
      repository: {
        issues: {
          edges: {
            title: string;
            body: string;
          };
        };
      };
    };
  };
}
export const fetchArticleDetail = ({ issue }: { issue: string }) => {
  const query = `{
search(
	first: 10
	query: "repo:plh97/blog ${issue}"
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
}`;
  return AxiosOrLocal<IArticle>({
    url: "/graphql",
    method: "post",
    data: {
      query
    }
  });
};
