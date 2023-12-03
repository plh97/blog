import classNames from "classnames";
// import BG from "@/public/bg.svg";
import Image from "next/image";

export default function CssBackground(props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={classNames("", props.className)}>
      <Image
        priority
        alt="Mountains"
        src={'/bg.svg'}
        // src={BG}
        // quality={100}
        fill
        className="object-cover"
        // style={{
        //   objectFit: 'cover',
        // }}
      />
      {props.children}
    </div>
  );
}
