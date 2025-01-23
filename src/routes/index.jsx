import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import PreventRoute from "./Prevent";
import ProtectedRoute from "./Protected";

// Lazy load pages
const Hero = lazy(() => import("@/pages/hero"));
const Courses = lazy(() => import("../pages/courses"));
const CourseDetails = lazy(() => import("../pages/courses/details"));
const About = lazy(() => import("../pages/about"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Support = lazy(() => import("../pages/support"));
const Services = lazy(() => import("../pages/services"));
const Login = lazy(() => import("../pages/auth/login"));
const Register = lazy(() => import("../pages/auth/register"));
const NetworkException = lazy(() => import("../exceptions/NetworkException"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          {/* Prevent routes for unauthenticated access */}
          <Route element={<PreventRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Public route */}
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />

          {/* Protected routes for authenticated users */}
          <Route element={<ProtectedRoute />}>
            <Route path="/online-courses" element={<Courses />} />
            <Route path="/offline-courses" element={<Courses />} />
            <Route path="/course-details/:id" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/error-network" element={<NetworkException />} />
          </Route>
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AllRoutes;
