import "../styles/EducationProjects.scss";

const EducationProjects = () => {
  return (
    <>
      <div className="codepen-wrapper">
        <div class="text-white text-5xl text-box">
          <div className="text-center">
            <p>E</p>
            <p>D</p>
            <p>U</p>
            <p>C</p>
            <p>A</p>
            <p>T</p>
            <p>I</p>
            <p>O</p>
            <p>N</p>
          </div>
          <div className="text-center">
            {" "}
            <p>A</p>
            <p>N</p>
            <p>D</p>
          </div>
          <div className="text-center">
            <p>P</p>
            <p>R</p>
            <p>O</p>
            <p>J</p>
            <p>E</p>
            <p>C</p>
            <p>T</p>
            <p>S</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="book">
            <div className="page">
              <div className="text-sm font-semibold page__1">
                Ecommerce App
                <img
                  style={{ width: "300px", height: "220px" }}
                  src="../src/assets/Screenshot from 2023-10-05 13-59-53.png"
                  alt=""
                />
              </div>
              <div className="page__2">
                <p className="p-3 text-white text-center text-sm font-semibold">
                  Created a sample responsive Ecommerce UI page where I used
                  react router, login auth, props, refs, hooks & lifecycle
                  methods, maintained the state and dispatched the actions using
                  Redux state management library
                </p>
                <p className="p-3 text-white text-center text-xs font-medium">
                  <a
                    className="text-left text-xs font-semibold"
                    href="https://github.com/codegritt/MERN-Redux-shop-master"
                  >
                    https://github.com/codegritt/MERN-Redux-shop-master
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="book">
            <div className="page">
              <div className="text-sm font-semibold page__1">
                Expense Tracker App
                <img
                  style={{ width: "300px", height: "220px" }}
                  src="../src/assets/Screenshot from 2023-10-05 14-09-24.png"
                  alt=""
                />
              </div>
              <div className="page__2">
                <p className="p-3 text-white text-center text-sm font-semibold">
                  Created a real time Expense tracker app using React.js as
                  framework, Express.js, MongoDB to handle the database,
                  Tailwind CSS, Styled components for styling, used useEffect(),
                  useContext() hooks for API implementation
                </p>
                <p className="p-3 text-white text-center text-xs font-semibold">
                  <a
                    className="text-left text-xs font-semibold"
                    href="https://github.com/codegritt/Expense-tracker-project---React-Vite"
                  >
                    https://github.com/codegritt/Expense-tracker-project---React-Vite
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="book">
            <div className="page">
              <div className="text-sm font-semibold page__1">
                Portfolio App
                <img
                  style={{ width: "300px", height: "220px" }}
                  src="../src/assets/Screenshot from 2023-10-05 14-07-00.png"
                  alt=""
                />
              </div>
              <div className="page__2">
                <p className="p-3 text-white text-center text-sm font-semibold">
                  A comprehensive developer portfolio I desined to showcase to
                  resume displaying my frontend skills required for the industry
                </p>
                <p className="p-3 text-white text-center text-xs font-semibold">
                  <a
                    className="text-left text-xs font-semibold"
                    href="https://github.com/codegritt/portfolio-project---React-Vite"
                  >
                    https://github.com/codegritt/portfolio-project---React-Vite
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="book">
            <div className="page">
              <div className="text-sm font-semibold page__1">
                Simple Crud App
                <img
                  style={{ width: "300px", height: "220px" }}
                  src="../src/assets/Screenshot from 2023-10-05 14-11-52.png"
                  alt=""
                />
              </div>
              <div className="page__2">
                <p className="p-3 text-white text-center text-sm font-semibold">
                  Created a sample CRUD operation app where features like adding
                  usernames, editing, deleting & searching usernames is enabled
                </p>
                <p className="p-3 text-white text-center text-xs font-semibold">
                  <a
                    className="text-left text-xs font-semibold"
                    href="https://github.com/codegritt/Simple-CRUD-APP---React-Vite"
                  >
                    https://github.com/codegritt/Simple-CRUD-APP---React-Vite
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationProjects;
