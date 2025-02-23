// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashboardLayout from "./pages/dashboardnull";
// import NewSurvey from "./pages/NewSurvey";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<DashboardLayout />} />
//         <Route path="/new-survey" element={<NewSurvey />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/dashboardnull";
import NewSurvey from "./pages/NewSurvey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/new-survey" element={<NewSurvey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
