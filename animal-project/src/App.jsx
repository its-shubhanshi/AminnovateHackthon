import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Blog from "./pages/blog/Blog";
import AllBlog from "./pages/allBlog/AllBlog";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import NoPage from "./pages/noPage/NoPage";
import { Toaster } from "react-hot-toast";
import MyState from "./context/data/myState";
import DashBoard from "./pages/dashboard/DashBoard";
import CreateBlog from "./pages/createBlog/CreateBlog";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlog />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <DashBoard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createblog" element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  );
};

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "testuser@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}
