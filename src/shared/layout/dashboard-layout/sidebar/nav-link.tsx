/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../../lib/cn";

interface Props {
  href: string;
  label: string;
  icon: any;
}

const NavLink = ({ href, label, icon: Icon }: Props) => {
  const location = useLocation();
  const isActive =
    href.length > 1
      ? location.pathname.includes(href)
      : location.pathname === href;
  return (
    <Link
      className={cn(
        "fill-subText flex items-center gap-2  text-subText hover:bg-gray-300 hover:text-primary p-3 rounded-xl group",
        isActive && "text-primary"
      )}
      to={href}
    >
      <Icon className="group-hover:text-primary" />

      <span> {label}</span>
    </Link>
  );
};

export default NavLink;
