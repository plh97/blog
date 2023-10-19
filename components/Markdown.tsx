import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Code from "./Code";
import Image from "next/image";

export default function Markdown(props: {
  children: string;
  className?: string;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className={classNames("markdown-body", props.className)}
      components={{
        img: (props) => {
          if (!props.width || !props.src) {
            return <img src={props.src} alt={props.alt} />;
          }
          return (
            <Image
              src={props.src ?? ""}
              alt={props.alt ?? ""}
              width={+props.width ?? 0}
              height={0}
              sizes="100vw"
              style={{ width: props.width, height: "auto" }} // optional
            />
          );
        },
        code(props) {
          const { children, className } = props;
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
