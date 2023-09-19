import { type PropsWithChildren, useState } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <main className="bg-background w-full">{children}</main>
    </div>
  );
};

export default Layout;
