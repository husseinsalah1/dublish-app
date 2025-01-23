import { Box, Button, Typography } from "@mui/material";
import Card from "./Card";
import { fetchCourses } from "@/redux/slices/course.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.courses);
  const location = useLocation();
  const navigate = useNavigate();

  const type = location.pathname === "/online-courses" ? "online" : "offline";
  useEffect(() => {
    dispatch(fetchCourses({ limit: 10, page: 1, type: type }));
  }, [dispatch, type]);

  if (loading && (!courses || courses.length === 0)) return <h1>Loading...</h1>;
  if (courses.result && courses.result.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          No courses found
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            navigate(`/${type === "online" ? "offline" : "online"}-courses`)
          }
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            marginTop: "16px",
          }}
        >
          Show another Courses
        </Button>
      </Box>
    );
  return (
    <>
      {courses &&
        courses.result &&
        courses.result.map((course, index) => (
          <Card key={index} course={course} lang="en" />
        ))}
    </>
  );
};

export default Courses;
