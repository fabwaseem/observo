import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="flex py-20 xl:py-32 gap-4 justify-center items-center w-full bg-neutral text-neutral-content h-auto bottom-0 sticky -z-10">
      <div className="w-full px-[10vw] flex flex-col">
        <div className="font-black text-[20vw] leading-none tracking-[-0.015em]">
          Observo
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 md:flex-row w-full md:justify-between text-sm py-6 mt-6 border-t border-neutral-content/10">
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 text-neutral-content">
              <div className="avatar">
                <div className="relative w-8 md:w-7 rounded-full group-hover:rotate-12 group-hover:scale-110 duration-300">
                  <Image
                    alt="Marc Lou"
                    fetchPriority="high"
                    width={240}
                    height={240}
                    src="/images/user2.png"
                  />
                </div>
              </div>
              <div className="max-md:max-w-[250px]">
                By{/* */}{" "}
                <a className="link-hover" href="#">
                  John Doe
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4 font-bold">
              <a className="link-hover" href="/privacy-policy">
                Privacy
              </a>
              <a className="link-hover" href="/tos">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
