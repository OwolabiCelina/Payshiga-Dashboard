import Bussiness from "./bussiness";
import { SIDE_BAR_LINKS } from "./constant";
import NavLink from "./nav-link";

const Sidebar = () => {
  return (
    <aside className="w-[254px] bg-[#FAFAFA] border-r border-border flex  flex-col">
      <div className="h-[89px] p-2">
        <Bussiness />
      </div>
      <div className="flex h-[calc(100%-89px)] pt-[49px] pb-10  flex-col px-4 ">
        {SIDE_BAR_LINKS.top.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
        <div className="mt-auto flex flex-col">
          {SIDE_BAR_LINKS.bottom.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
