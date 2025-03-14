import Navbar from "@/components/landing/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-primary">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
