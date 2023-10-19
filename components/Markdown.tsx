import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import Code from "./Code";

export default function Markdown(props: {
  children: string;
  className?: string;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className={"markdown-body" + " " + props.className ?? ""}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return (
            <Code language={match?.[1]}>
              {String(children).replace(/\n$/, "")}
            </Code>
          );
        },
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
}
