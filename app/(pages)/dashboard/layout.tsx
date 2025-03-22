import Navbar from "@/components/dashboard/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <main className="min-h-screen max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 bg-base-200">
        {children}
      </main>
    </div>
  );
};

export default layout;
