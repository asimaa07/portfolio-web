import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="items-center block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-[#133E87]"
    >
      {title}
    </Link>
  );
};

export default NavLink;