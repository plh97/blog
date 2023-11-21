import classNames from "classnames";
import BG from "../../app/bg.svg";

export default function CssBackground(props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={classNames("", props.className)}>
      <BG />
      {props.children}
    </div>
  );
}
