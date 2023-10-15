import { fetchHome } from "@/apis/home";
import { fetchUser } from "@/apis/user";
import Viewer from "@/components/Viewer";
import Markdown from "@/components/Markdown";

import './page.scss'

export const metadata = {
  title: 'Home Page',
  description: 'This is plh97\'s blog',
}

export default async function Home() {
  const user = await fetchUser();
  const home = await fetchHome();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 HomePage">
      <Viewer title="主页" data={user.data.viewer} />
      <Markdown
        className="markdown-body HomePage-markdown__body"
      >
        {home.data.repositoryOwner.repository.object.text}
      </Markdown>
    </main>
  );
}
