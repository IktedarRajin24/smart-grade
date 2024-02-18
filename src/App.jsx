/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import "./App.css";
const allStudents = {
  classes: [
    {
      class_name: "Class One",
      students: [
        { name: "John Smith", id: "1001", grade: 85, percentage: 85.0 },
        {
          name: "Emily Johnson",
          id: "1002",
          grade: 78,
          percentage: 78.0,
        },
        {
          name: "Michael Williams",
          id: "1003",
          grade: 92,
          percentage: 92.0,
        },
        { name: "Emma Jones", id: "1004", grade: 89, percentage: 89.0 },
        {
          name: "Daniel Brown",
          id: "1005",
          grade: 75,
          percentage: 75.0,
        },
        {
          name: "Olivia Davis",
          id: "1006",
          grade: 83,
          percentage: 83.0,
        },
        {
          name: "Matthew Miller",
          id: "1007",
          grade: 91,
          percentage: 91.0,
        },
        { name: "Ava Wilson", id: "1008", grade: 86, percentage: 86.0 },
        {
          name: "William Taylor",
          id: "1009",
          grade: 79,
          percentage: 79.0,
        },
        {
          name: "Sophia Anderson",
          id: "2010",
          grade: 88,
          percentage: 88.0,
        },
      ],
    },
    {
      class_name: "Class Two",
      students: [
        {
          name: "Liam Martinez",
          id: "2001",
          grade: 90,
          percentage: 90.0,
        },
        {
          name: "Isabella Hernandez",
          id: "2002",
          grade: 82,
          percentage: 82.0,
        },
        {
          name: "Mason Gonzalez",
          id: "2003",
          grade: 87,
          percentage: 87.0,
        },
        { name: "Mia Lopez", id: "2004", grade: 94, percentage: 94.0 },
        {
          name: "James Perez",
          id: "2005",
          grade: 76,
          percentage: 76.0,
        },
        {
          name: "Harper Rodriguez",
          id: "2006",
          grade: 81,
          percentage: 81.0,
        },
        {
          name: "Benjamin Cruz",
          id: "2007",
          grade: 93,
          percentage: 93.0,
        },
        {
          name: "Evelyn Moore",
          id: "2008",
          grade: 85,
          percentage: 85.0,
        },
        { name: "Logan Hill", id: "2009", grade: 78, percentage: 78.0 },
        { name: "Avery Scott", id: "2010", grade: 89, percentage: 89.0 },
      ],
    },
    {
      class_name: "Class Three",
      students: [
        {
          name: "Alexander King",
          id: "3001",
          grade: 88,
          percentage: 88.0,
        },
        {
          name: "Charlotte Green",
          id: "3002",
          grade: 85,
          percentage: 85.0,
        },
        {
          name: "Daniel Baker",
          id: "3003",
          grade: 79,
          percentage: 79.0,
        },
        {
          name: "Sophia Adams",
          id: "3004",
          grade: 91,
          percentage: 91.0,
        },
        { name: "Logan Hill", id: "3005", grade: 84, percentage: 84.0 },
        {
          name: "Isabella Hughes",
          id: "3006",
          grade: 90,
          percentage: 90.0,
        },
        {
          name: "William Campbell",
          id: "3007",
          grade: 77,
          percentage: 77.0,
        },
        { name: "Ava Ward", id: "3008", grade: 92, percentage: 92.0 },
        {
          name: "Benjamin Russell",
          id: "3009",
          grade: 83,
          percentage: 83.0,
        },
        {
          name: "Madison Price",
          id: "3010",
          grade: 86,
          percentage: 86.0,
        },
      ],
    },
  ],
};

function Header() {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[40px]" src="./images/lws-logo-en.svg" alt="Lws" />
        </a>
        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
}

function Banner() {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
          <img
            className="md:order-2 object-cover ml-auto animate-updown"
            src="./images/hero-graphics.svg"
            width="500px"
            height="500px"
            alt="Banner"
          />
          <div>
            <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px]" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Students({ students }) {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <form>
            <div className="flex">
              <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                  placeholder="Search by Student "
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((classes) => (
                <Fragment key={classes.class_name}>
                  <tr className="bg-white/5">
                    <td className="p-5 text-sm md:text-xl" colSpan="4">
                      {classes.class_name}
                    </td>
                  </tr>
                  {classes.students.map((student) => (
                    <Fragment key={student.id}>
                      <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">{student.id}</td>
                        <td className="p-5 text-sm md:text-xl">
                          <div className="flex space-x-3 items-center">
                            <img
                              className="w-8 h-8"
                              src="./images/avatar.png"
                              width="32"
                              height="32"
                              alt={student.name}
                            />
                            <span className="whitespace-nowrap">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                          {student.grade >= 90 && student.grade < 100
                            ? "A+"
                            : student.grade >= 85 && student.grade < 90
                            ? "A"
                            : student.grade >= 80 && student.grade < 85
                            ? "B+"
                            : student.grade >= 75 && student.grade < 80
                            ? "B"
                            : student.grade >= 70 && student.grade < 75
                            ? "C+"
                            : student.grade >= 65 && student.grade < 70
                            ? "C"
                            : student.grade >= 60 && student.grade < 65
                            ? "D+"
                            : student.grade >= 50 && student.grade < 60
                            ? "D"
                            : "F"}
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                          {student.percentage}%
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-base text-gray-500">
          Copyright ©2024 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}

function App() {
  const [students, setStudents] = useState(allStudents.classes);
  // console.log(students.length);

  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Header />
      <Banner />
      <Students students={students} />
      <Footer />
    </div>
  );
}

export default App;
