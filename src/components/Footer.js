import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 mt-32 md:mt-48 rounded-lg shadow flex flex-col md:flex-row items-center gap-2 md:flex md:items-center md:justify-between md:p-6 bg-transparent">
        <span className="text-sm text-white sm:text-center ">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Helping Hand™
          </a>
          . All Rights Reserved.
        </span>
        <span className="text-white text-sm">
          Made with ❤️ by <span className="text-orange-400">Psychopaths</span>
        </span>
        <ul className="hidden md:flex flex-wrap items-center mt-3 text-sm text-white ">
          <li>
            <a
              href="/"
              className="mr-4 hover:underline hover:text-orange-400 md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="mr-4 hover:underline hover:text-orange-400 md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="mr-4 hover:underline hover:text-orange-400 md:mr-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
