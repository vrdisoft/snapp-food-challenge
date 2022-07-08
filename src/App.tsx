import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import routes from "./routes";
import * as paths from "./routes/paths";
import "./App.scss";
import Layout from "./layout";
import "./assets/css/font-awesome.css";

function App() {
  return (
    <div className="app-continer">
      <Routes>
        {routes.map((item) => {
          return (
            <Route
              key={item.title}
              path={item.path}
              element={<Layout component={item.component} />}
            />
          );
        })}
        <Route path="*" element={<Navigate to={paths.HOME} replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
