/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from 'react'

export default function Team() {
  return (
    <div className="my-32 px-4 lg:text-auto md:text-auto text-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-9 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-20 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Get to know</span>
          </span>{' '}
          our talented team of professionals.
        </h2>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative flex h-[440px] flex-col rounded-xl bg-theme-light bg-clip-border text-gray-700 shadow-md">
          <div className="object-cover relative h-[270px] w-full overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
            <img src="/images/picc.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Rana Amir Hussain
            </h4>
            <p className="block bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Owner of FDcetp
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="relative flex h-[440px] flex-col rounded-xl bg-theme-light bg-clip-border text-gray-700 shadow-md">
          <div className="object-cover relative h-[270px] w-full overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
            <img src="/images/picb.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Rana Reebaal
            </h4>
            <p className="block bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Research Manager & Architect
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://pk.linkedin.com/in/rana-reebaal"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="relative flex h-[440px] flex-col rounded-xl bg-theme-light bg-clip-border text-gray-700 shadow-md">
          <div className="object-cover relative h-[270px] w-full overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
            <img src="/images/pica.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Rana Rabees
            </h4>
            <p className="block bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Senior Full Stack Developer
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="https://www.fb.com/profile.php?id=100088975870807"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://pk.linkedin.com/in/ranarabees"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/RanaRabees"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="relative flex h-[440px] flex-col rounded-xl bg-theme-light bg-clip-border text-gray-700 shadow-md">
          <div className="object-cover relative h-[270px] w-full overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
            <img src="/images/picd.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Adeema Amir
            </h4>
            <p className="block bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Senior Ui-Ux Designer
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
