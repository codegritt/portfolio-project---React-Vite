import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-orange-600 mt-24">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-white">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Gokul's Portfolio™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <footer class="bg-white dark:bg-gray-600">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Licensing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    iOS
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Android
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Windows
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
