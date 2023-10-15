import AxiosOrLocal from "@/utils/axiosOrLocal";

export interface IViewer {
  avatarUrl: string;
  name: string;
  bio: string;
}

export const fetchUser = () =>
  AxiosOrLocal<{ data: { viewer: IViewer } }>({
    url: "/graphql",
    method: "post",
    data: {
      query: `{
        viewer {
          name avatarUrl login bio url createdAt isHireable
        }
      }`,
    },
  });
