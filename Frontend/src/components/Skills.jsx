const Skills = () => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-7/12 ml-80 text-lg text-left text-orange-400 dark:text-orange-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Web development
              </th>
              <td className="px-6 py-4">
                {" "}
                HTML5, CSS3, SASS, TypeScript, Bootstrap
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Programming Languages
              </th>
              <td className="px-6 py-4">JavaScript(ES6)</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Frameworks
              </th>
              <td className="px-6 py-4">
                React.js, Angular, Node.js, Tailwind CSS
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Libraries
              </th>
              <td className="px-6 py-4">Redux, Express.js, Mongoose</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Databases
              </th>
              <td className="px-6 py-4">
                MongoDB, Firebase, Google Cloud, AWS
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tools/ IDE
              </th>
              <td className="px-6 py-4">
                VS code, NPM, Git, Github, Postman API, Mlab, Docker
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hands-on experience
              </th>
              <td className="px-6 py-4">Next.js, Strapi, Stripe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Skills;
