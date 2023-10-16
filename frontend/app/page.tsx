import _ from "lodash";
import { fetchUser } from "@/apis/user";
import Viewer from "@/components/Viewer";
import Markdown from "@/components/Markdown";
import { fetchRepositoryDetail } from "@/apis/repository";

import "./page.scss";

export const metadata = {
  title: "Home Page",
  description: "This is plh97's blog",
};

export default async function Home() {
  const user = await fetchUser();
  const repositoryRes = await fetchRepositoryDetail({
    repo: "plh97/blog",
    branch: "develop",
  });
  const repositoryText = _.get(
    repositoryRes,
    "data.search.edges[0].node.object.text",
    ""
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 HomePage">
      <Viewer title="主页" data={user.data.viewer} />
      <Markdown className="markdown-body HomePage-markdown__body">
        {repositoryText}
      </Markdown>
    </main>
  );
}
