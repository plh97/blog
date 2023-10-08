import AxiosOrLocal from "@/utils/axiosOrLocal";
// repositoryOwner.repository.object.text -> string
interface IRepository {
  object: {
    text: string;
  };
}
export const fetchHome = () =>
  AxiosOrLocal<{ data: { repositoryOwner: { repository: IRepository } } }>({
    url: "/graphql",
    method: "post",
    data: {
      query: `{
            repositoryOwner(login: "plh97") {
                repository(name: "pengliheng.github.io") {
                    object(expression: "master:README.md") {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        }`,
    },
  });
