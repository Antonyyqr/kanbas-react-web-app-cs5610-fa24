import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import { HashRouter, Route, Link, Navigate, Routes } from "react-router-dom";
import TOC from "./TOC";
import store from "./Lab4/store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <div>
      <h1>Qirui Yang CS5610</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
        <Route
          path="a1/*"
          element={
            <HashRouter>
              <Routes>
                <Route
                  path="*"
                  element={
                    <Navigate to="https://github.com/Antonyyqr/kanbas-react-web-app-cs5610-fa24/tree/a1" />
                  }
                />
              </Routes>
            </HashRouter>
          }
        />
      </Routes>
    </div>
  );
}
