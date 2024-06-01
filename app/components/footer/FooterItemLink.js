import Link from "next/link";
function FooterItemLink(props) {
  return (
    <li className="">
      <Link className="hover:text-blue-500" href={`${props.link}`}>
        <span className="whitespace-nowrap mb-2 text-base">{props.children}</span>
      </Link>
    </li>
  );
}

export default FooterItemLink;
