import { type PropsWithChildren, useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex">
      <Sidebar activeIndex={activeIndex} />
      <main className="bg-black w-full">{children}</main>
    </div>
  );
};

export default Layout;
