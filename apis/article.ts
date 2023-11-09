import AxiosOrLocal from "@/utils/axiosOrLocal";

export interface IArticleList {
  updatedAt: string;
  title: string;
  author: {
    login: string;
    avatarUrl: string;
  };
  labels: {
    nodes: {
      color: string;
      name: string;
      description: string;
    }[];
  };
}

export const fetchArticleList = () =>
  AxiosOrLocal<{
		data: {
			repositoryOwner: {
				repository: {
					issues: {
						edges: {
							node: IArticleList
						}[];
					};
				};
			};
		};
	}>({
    url: "/graphql",
    method: "post",
    data: {
      query: `{
				repositoryOwner(login: "plh97") {
					repository(name: "blog") {
						issues(first: 100, states: OPEN) {
							edges {
								node {
									updatedAt
									createdAt
									title
									id
									author {
										avatarUrl
										login
									}
									labels(first: 5) {
										nodes {
											name
											color
											description
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
