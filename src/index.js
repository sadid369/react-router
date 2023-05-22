import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home></Home>);

function Home() {
  return <App></App>;
}
// function Learn() {
//   return (
//     <div>
//       <h1>Learn </h1>
//       <h4>All Courses are listed here </h4>
//       <Link className={`btn btn-success`} to="/learn/courses">
//         courses
//       </Link>
//       <br />
//       <br />
//       <Link className={`btn btn-primary`} to="/learn/bundles">
//         bundle
//       </Link>
//       <Outlet></Outlet>
//     </div>
//   );
// }
// function Courses() {
//   const courseList = ["React", "Angular", "Vue", "Nodejs"];
//   const randomCourseName =
//     courseList[Math.floor(Math.random() * courseList.length)];
//   return (
//     <div>
//       <h1>Courses List</h1>
//       <h4>Courses card</h4>
//       <p>More Test</p>
//       <NavLink
//         style={({ isActive }) => {
//           return {
//             backgroundColor: isActive ? "pink" : "yellow",
//           };
//         }}
//         to={`/learn/courses/${randomCourseName}`}
//       >
//         {randomCourseName}
//       </NavLink>
//       <NavLink className={`btn btn-light`} to={`/learn/courses/tests`}>
//         tests
//       </NavLink>
//       <Outlet />
//     </div>
//   );
// }
// function Bundles() {
//   return (
//     <div>
//       <h1>Bundle List</h1>
//       <h4>Bundle card</h4>
//     </div>
//   );
// }
// function CourseId() {
//   const { courseid } = useParams();
//   return (
//     <div>
//       <h1>URL Params is: {courseid}</h1>
//     </div>
//   );
// }

reportWebVitals();
