import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-base rounded md:p-0 hover:text-white"
    >
      <code>{title}</code>
    </Link>
  );
};

export default NavLink;
