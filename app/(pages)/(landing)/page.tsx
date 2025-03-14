import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <div className="relative w-full bg-neutral rounded-3xl xl:rounded-[48px] pt-8 xl:pt-16 z-10">
        <section className="flex justify-center items-start pt-12 xl:pt-16 pb-32 px-4 bg-neutral w-full text-neutral-content">
          <section className="bg-neutral text-neutral-content">
            <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
              <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:!text-6xl tracking-[-0.01em] mb-16 md:mb-32">
                80% of startups fail because founders build{/* */}{" "}
                <span className="underline decoration-dashed underline-offset-8 decoration-neutral-content/60">
                  useless products
                </span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
                <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
                  <span className="text-4xl">🤩</span>
                  <h3 className="font-bold">Launch new feature</h3>
                </div>
                <svg
                  className="shrink-0 w-12 fill-neutral-content opacity-70 max-md:-scale-x-100 md:-rotate-90"
                  viewBox="0 0 138 138"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
                    />
                  </g>
                </svg>
                <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
                  <span className="text-4xl">😐</span>
                  <h3 className="font-bold">But nothing happens</h3>
                </div>
                <svg
                  className="shrink-0 w-12 fill-neutral-content opacity-70 md:-scale-x-100 md:-rotate-90"
                  viewBox="0 0 138 138"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
                    />
                  </g>
                </svg>
                <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
                  <span className="text-4xl">😔</span>
                  <h3 className="font-bold">Lose motivation and quit</h3>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="flex justify-center items-center w-full bg-base-100 text-base-content py-20 xl:py-32">
          <div className="py-16 md:py-32 flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
            <h4 className="max-w-3xl font-extrabold text-4xl md:!text-6xl tracking-[-0.01em]">
              Ship features
              <br /> users{/* */}{" "}
              <span className="underline decoration-dashed underline-offset-8 decoration-base-300">
                really want
              </span>
            </h4>
            <div className="flex flex-col w-full h-fit gap-4 xl:gap-10 text-text-default max-w-[82rem]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
                <div className="bg-primary text-primary-content rounded-3xl flex flex-col gap-6 w-full h-[22rem] xl:h-[25rem] pt-6 overflow-hidden group">
                  <div className="px-6 space-y-2">
                    <h3 className="text-xl lg:text-3xl tracking-tight">
                      Collect user feedback
                    </h3>
                    <div className="opacity-80">
                      Use your Observo&apos;s board to let users submit features
                      they want.
                    </div>
                  </div>
                  <div className="overflow-hidden h-full flex items-stretch">
                    <div className="w-full translate-x-12 bg-base-200 rounded-t-box h-full p-6">
                      <p className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                        Suggest a feature
                      </p>
                      <div className="relative textarea py-4 h-full mr-12 bg-base-200 group-hover:bg-base-100 group-hover:border-base-content/10">
                        <div className="absolute left-4 top-4 group-hover:hidden flex items-center ">
                          <span>Notifica</span>
                          <span className="w-[2px] h-6 bg-primary animate-pulse" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 duration-500">
                          Notifications should be visible only on certain pages.
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 duration-1000 flex items-center gap-0.5">
                          <span>
                            Terms &amp; privacy pages don&apos;t need them
                          </span>
                          <span className="w-[2px] h-6 bg-primary animate-pulse" />
                        </div>
                        <button className="btn shadow-lg btn-primary absolute right-4 bottom-6 opacity-0 group-hover:opacity-100 duration-1000">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 bg-neutral text-neutral-content rounded-3xl flex flex-col gap-10 w-full h-[22rem] xl:h-[25rem] pt-6 overflow-hidden group">
                  <div className="px-6 space-y-2">
                    <h3 className="text-xl lg:text-3xl tracking-tight">
                      Prioritize features
                    </h3>
                    <div className="opacity-80">
                      Users upvote features they want. You know what to ship
                      next.
                    </div>
                  </div>
                  <div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
                    <div className="p-4 bg-base-100 text-base-content rounded-box flex justify-between mb-2 gap-4 group-hover:-mt-36 group-hover:md:-mt-28 duration-500">
                      <div>
                        <p className="font-semibold mb-1">
                          Add LemonSqueezy integration to the boilerplate
                        </p>
                        <p className="text-base-content-secondary">
                          Yes, ship this! ✅
                        </p>
                      </div>
                      <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        48
                      </button>
                    </div>
                    <div className="p-4 bg-base-100 text-base-content rounded-box flex justify-between mb-2 gap-4 undefined">
                      <div>
                        <p className="font-semibold mb-1">
                          A new pricing table for metered billing
                        </p>
                        <p className="text-base-content-secondary">
                          Maybe ship this 🤔
                        </p>
                      </div>
                      <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        12
                      </button>
                    </div>
                    <div className="p-4 bg-base-100 text-base-content rounded-box flex justify-between mb-2 gap-4 undefined">
                      <div>
                        <p className="font-semibold mb-1">
                          A new UI library for the dashboard
                        </p>
                        <p className="text-base-content-secondary">
                          But don&apos;t ship that ❌
                        </p>
                      </div>
                      <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        1
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
                <div className="md:col-span-2 bg-base-200 text-base-content rounded-3xl flex flex-col gap-6 w-full h-[22rem] xl:h-[25rem] pt-6 overflow-hidden group">
                  <div className="px-6">
                    <h3 className="text-xl lg:text-3xl tracking-tight">
                      Your brand, your board
                    </h3>
                    <div className="opacity-80">
                      Customize your Observo board with 7 themes.
                    </div>
                  </div>
                  <div className="flex left-0 w-full h-full pt-0 xl:pt-8 overflow-hidden -mt-4">
                    <div className="-rotate-[8deg] flex min-w-max overflow-x-visible h-full xl:pt-4">
                      <div
                        className="-ml-1 rotate-[6deg] w-72 h-72 z-30 bg-base-200 text-base-content rounded-2xl group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 p-4"
                        data-theme="valentine"
                      >
                        <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                          Trending feedback
                        </div>
                        <div className="space-y-2">
                          <div className="p-4 bg-base-100 rounded-box flex justify-between">
                            <div>
                              <p className="font-semibold mb-1">
                                Clickable cards
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              8
                            </button>
                          </div>
                          <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                            <div>
                              <p className="font-semibold mb-1">
                                Bigger images
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              5
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -mr-20 -ml-20 z-20 rounded-xl p-4"
                        data-theme="cyberpunk"
                      >
                        <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                          Trending feedback
                        </div>
                        <div className="space-y-2">
                          <div className="p-4 bg-base-100 rounded-box flex justify-between">
                            <div>
                              <p className="font-semibold mb-1">
                                Clickable cards
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              8
                            </button>
                          </div>
                          <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                            <div>
                              <p className="font-semibold mb-1">
                                Bigger images
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              5
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rotate-[6deg] bg-base-200 text-base-content z-10 w-72 h-72 rounded-xl p-4"
                        data-theme="dark"
                      >
                        <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                          Trending feedback
                        </div>
                        <div className="space-y-2">
                          <div className="p-4 bg-base-100 rounded-box flex justify-between">
                            <div>
                              <p className="font-semibold mb-1">
                                Clickable cards
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              8
                            </button>
                          </div>
                          <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                            <div>
                              <p className="font-semibold mb-1">
                                Bigger images
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              5
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-20 rounded-xl p-4"
                        data-theme="aqua"
                      >
                        <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                          Trending feedback
                        </div>
                        <div className="space-y-2">
                          <div className="p-4 bg-base-100 rounded-box flex justify-between">
                            <div>
                              <p className="font-semibold mb-1">
                                Clickable cards
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              8
                            </button>
                          </div>
                          <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                            <div>
                              <p className="font-semibold mb-1">
                                Bigger images
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              5
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-10 -z-10 rounded-xl p-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                        data-theme="retro"
                      >
                        <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                          Trending feedback
                        </div>
                        <div className="space-y-2">
                          <div className="p-4 bg-base-100 rounded-box flex justify-between">
                            <div>
                              <p className="font-semibold mb-1">
                                Clickable cards
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              8
                            </button>
                          </div>
                          <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                            <div>
                              <p className="font-semibold mb-1">
                                Bigger images
                              </p>
                              <p className="opacity-80">
                                Make cards more accessible
                              </p>
                            </div>
                            <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5  ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0"
                              >
                                <path d="m18 15-6-6-6 6" />
                              </svg>
                              5
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral text-neutral-content rounded-3xl flex flex-col gap-6 w-full h-[22rem] xl:h-[25rem] pt-6 overflow-hidden group">
                  <div className="px-6 space-y-2">
                    <h3 className="text-xl lg:text-3xl tracking-tight">
                      Discover new ideas
                    </h3>
                    <div className="opacity-80">
                      Users can chat and discuss features.
                    </div>
                  </div>
                  <div className="text-neutral-content px-6 space-y-4">
                    <div className="px-6 py-4 bg-neutral-content text-neutral rounded-box undefined">
                      <div className="mb-2 whitespace-pre-wrap">
                        Can we have a feature to add a custom domain to
                        IndiePage?
                      </div>
                      <div className="text-neutral/80 flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="avatar">
                            <div className="w-7 rounded-full">
                              <Image
                                alt="user"
                                loading="lazy"
                                width={32}
                                height={32}
                                src="/images/user2.png"
                              />
                            </div>
                          </div>
                          <div className="">Marc Lou</div>
                        </div>
                        •<div>Sep 1, 2024</div>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-neutral-content text-neutral rounded-box opacity-0 group-hover:opacity-100 duration-500 translate-x-1/4 group-hover:translate-x-0">
                      <div className="mb-2 whitespace-pre-wrap">
                        I&apos;d definitelly pay for that 🤩{" "}
                      </div>
                      <div className="text-neutral/80 flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="avatar">
                            <div className="w-7 rounded-full">
                              <Image
                                alt="user"
                                loading="lazy"
                                width={32}
                                height={32}
                                src="/images/user2.png"
                              />
                            </div>
                          </div>
                          <div className="">Dan K.</div>
                        </div>
                        •<div>Sep 2, 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-neutral w-full text-neutral-content flex flex-col md:flex-row justify-center items-center gap-2 max-md:text-center text-lg md:text-xl">
          <span className="font-semibold">Where&apos;s the pricing?</span>
          <span>
            <span className="text-neutral-content/90">
              There&apos;s none, because Observo is 100% free
            </span>{" "}
            <span>💛</span>
          </span>
        </section>

        <section className="flex justify-center items-center w-full bg-primary text-primary-content py-20 xl:py-32 rounded-b-3xl xl:rounded-b-[48px]">
          <div className="max-w-7xl px-8 py-16 md:py-32 text-center">
            <h4 className="max-w-3xl font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em] mb-16 md:mb-32">
              Ship features users (really) want
            </h4>
            <button className="btn btn-neutral btn-lg">
              Collect feedback for free
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default page;
