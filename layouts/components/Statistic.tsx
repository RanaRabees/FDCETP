import CountUp from "react-countup";

export default function Statistic() {
  return (
    <>
      <div className="lg:text-auto md:text-auto text-center my-40 px-2 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-20 lg:py-20">
        <section className="section bg-theme-light">
          <div className="container">
            <div className="text-center">
              <h2>Our Products Usage<br /><br />
              </h2>
            </div>
            <div className="grid gap-10 row-gap-8 lg:grid-cols-4 md:lg:grid-cols-2 grid-cols-1">
              <div>
                <div className="flex">
                  <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                    <CountUp
                      className="Downloads"
                      start={0}
                      end={245589}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h6>
                  <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
                    <svg
                      className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                      stroke="white"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">Downloads</p>
              </div>
              <div>
                <div className="flex">
                  <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                    <CountUp
                      className="Subscribers"
                      start={0}
                      end={356124}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h6>
                  <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
                    <svg
                      className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                      stroke="white"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">Subscribers</p>
              </div>
              <div>
                <div className="flex">
                  <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                    <CountUp
                      className="Cookies"
                      start={0}
                      end={351642}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h6>
                  <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
                    <svg
                      className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                      stroke="white"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">Cookies</p>
              </div>
              <div>
                <div className="flex">
                  <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                    <CountUp
                      className="Users"
                      start={0}
                      end={981235}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h6>
                  <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
                    <svg
                      className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                      stroke="white"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mb-2 font-bold md:text-lg">Users</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
