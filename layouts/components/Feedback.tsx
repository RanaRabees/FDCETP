/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Feedback() {
  return (
    <section className="section lg:text-auto md:text-auto text-center bg-theme-light">
      <div className="max-w-xl mt-28 mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-9 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            At FDCETP, our commitment to excellence is reflected in the feedback we receive from our valued clients. Here's what some of them have to say about their experience with us:
          </p>
        </div>
        <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Customer Reviews</span>
          </span>{' '}
        </h2>
      </div>
      <div className="mb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="p-8 bg-white border rounded shadow-sm">
            <Link
              href="/"
              aria-label="Vasile Melinte"
              title="Vasile Melinte"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Vasile Melinte
            </Link>
            <p className="mb-5 text-gray-700">
              "FDCETP delivered exceptional blockchain solutions that greatly enhanced our data security and transparency. Their professionalism and expertise are second to none. We're grateful for the partnership and look forward to collaborating on future projects."            </p>
            <div className="flex items-center">
              <Link href="/" aria-label="Vasile Melinte" title="Vasile Melinte" className="mr-3">
                <img
                  src="/images/proa.webp"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  CEO of Tech Innovations Inc.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <Link
              href="/"
              aria-label="John Doe"
              title="John Doe"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              John Doe
            </Link>
            <p className="mb-5 text-gray-700">
              "The team at FDCETP streamlined our operations with IoT integration, providing real-time insights that led to increased efficiency and cost savings. Their responsiveness and knowledge have been invaluable in helping us embrace IoT technology."
            </p>
            <div className="flex items-center">
              <Link href="/" aria-label="John Doe" title="John Doe" className="mr-3">
                <img
                  src="/images/prob.webp"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  CTO of E-Commerce Solutions Ltd.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <Link
              href="/"
              aria-label="Qamar Zaman Dogar"
              title="Qamar Zaman Dogar"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Qamar Zaman Dogar
            </Link>
            <p className="mb-5 text-gray-700">
              "Thanks to FDCETP's decentralized applications, we've improved our supply chain management and transparency. Their DApps streamlined our processes and enhanced trust with our partners. We eagerly anticipate more collaborations in the future."
            </p>
            <div className="flex items-center">
              <Link href="/" aria-label="Qamar Zaman Dogar" title="Qamar Zaman Dogar" className="mr-3">
                <img
                  src="/images/proc.webp"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  CFO Habib Bank Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
