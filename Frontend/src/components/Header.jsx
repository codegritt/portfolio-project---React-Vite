import { useState } from "react";
import Profile from "./Profile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import EducationProjects from "./EducationProjects";
import ContactMe from "./ContactMe";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  const [tab, setTab] = useState("Home");
  return (
    <>
      <header>
        <nav className="px-4 lg:px-6 py-2 dark:bg-orange-600">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Gokul's Portfolio
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="relative left-32 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <button
                    onClick={() => setTab("Profile")}
                    className={
                      tab === "Profile"
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white underline"
                        : "block py-2 pr-4 pl-3 text-white border-b border-white hover:bg-white lg:hover:bg-white lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                    }
                  >
                    Profile
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setTab("WorkExperience")}
                    className={
                      tab === "WorkExperience"
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white underline"
                        : "block py-2 pr-4 pl-3 text-white border-b border-white hover:bg-white lg:hover:bg-white lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                    }
                  >
                    Work Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("Skills")}
                    className={
                      tab === "Skills"
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white underline"
                        : "block py-2 pr-4 pl-3 text-white border-b border-white hover:bg-white lg:hover:bg-white lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                    }
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("Education")}
                    className={
                      tab === "Education"
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white underline"
                        : "block py-2 pr-4 pl-3 text-white border-b border-white hover:bg-white lg:hover:bg-white lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                    }
                  >
                    Education & Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTab("Contact")}
                    className={
                      tab === "Contact"
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white underline"
                        : "block py-2 pr-4 pl-3 text-white border-b border-white hover:bg-white lg:hover:bg-white lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                    }
                  >
                    Contact Me
                  </button>
                </li>
              </ul>
              <div className="ml-64 flex flex-wrap gap-2">
                <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <a href="https://www.facebook.com/campaign/landing.php?campaign_id=15316858002&extra_1=s%7Cc%7C589521711734%7Cb%7Cfacebook%7C&placement=&creative=589521711734&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D15316858002%26adgroupid%3D130780223435%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9061899%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwjt-oBhDKARIsABVRB0wtQRo84rWGzXOVucBBrKzunrY8QA-QEW8AVkejp_p-u3_esmHarCgaAgtJEALw_wcB">
                    <svg
                      className="w-5 h-5 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </button>

                <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                    <svg
                      className="w-5 h-5 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </button>

                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <a href="https://www.linkedin.com/in/gokul-va-14a304a5/">
                    <svg
                      className="w-5 h-5 fill-current"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                      </g>
                    </svg>
                  </a>
                </button>

                <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <a href="https://github.com/codegritt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="w-5"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </a>
                </button>

                <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="w-5"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {tab === "Profile" && (
        <div className="show-box">
          <Profile />
        </div>
      )}
      {tab === "WorkExperience" && (
        <div className="bg-gray-600 p-5 show-box">
          <WorkExperience />
        </div>
      )}
      {tab === "Skills" && (
        <div className="bg-gray-600 p-24 show-box">
          <Skills />
        </div>
      )}
      {tab === "Education" && (
        <div className="bg-gray-600 show-box">
          <EducationProjects />
        </div>
      )}
      {tab === "Contact" && (
        <div className="bg-gray-600 show-box">
          <ContactMe />
        </div>
      )}
    </>
  );
};

export default Header;
