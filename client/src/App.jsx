import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />}></Route>
          <Route path="/tasks" element={<TasksPage />}></Route>
          <Route path="/tasks-create" element={<TaskFormPage />}></Route>
          <Route path="/tasks/:id" element={<TaskFormPage />}></Route>
        </Routes>
        <Toaster></Toaster>
      </div>
    </BrowserRouter>
  );
}

export default App;
