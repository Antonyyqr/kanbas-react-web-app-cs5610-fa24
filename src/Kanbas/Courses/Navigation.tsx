// import { Link } from "react-router-dom";
// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation">
//       <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home">
//         Home
//       </Link>
//       <br />
//       <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">
//         Modules
//       </Link>
//       <br />
//       <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza">
//         Piazza
//       </Link>
//       <br />
//       <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom">
//         Zoom
//       </Link>
//       <br />
//       <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">
//         Assignments
//       </Link>
//       <br />
//       <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">
//         Quizzes
//       </Link>
//       <br />
//       <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades">
//         Grades
//       </Link>
//       <br />
//       <Link id="wd-course-people-link" to="/Kanbas/Courses/1234/People">
//         People
//       </Link>
//       <br />
//     </div>
//   );
// }

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "list-group-item bg-white text-danger border-top border-bottom border-end"
      : "list-group-item bg-white text-red border-0";
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={getLinkClass("/Kanbas/Courses/1234/Home")}
      >
        {" "}
        Home{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={getLinkClass("/Kanbas/Courses/1234/Modules")}
      >
        {" "}
        Modules{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={getLinkClass("/Kanbas/Courses/1234/Piazza")}
      >
        {" "}
        Piazza{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={getLinkClass("/Kanbas/Courses/1234/Zoom")}
      >
        {" "}
        Zoom{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className={getLinkClass("/Kanbas/Courses/1234/Assignments")}
      >
        {" "}
        Assignments{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className={getLinkClass("/Kanbas/Courses/1234/Quizzes")}
      >
        {" "}
        Quizzes{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className={getLinkClass("/Kanbas/Courses/1234/People")}
      >
        {" "}
        People{" "}
      </Link>
      <br />
    </div>
  );
}
