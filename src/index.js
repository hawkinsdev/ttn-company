import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./utils/PrivateRoute";
//Components
import { App } from "./App";
import { Home } from "./pages/Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route exact path="/home" element={<Home />} />
      </Route>
      <Route path="/login" element={<App />} />
    </Routes>
  </BrowserRouter>
);
