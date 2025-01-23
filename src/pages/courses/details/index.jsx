import Navbar from "@/components/layout/navbar/index";
import {
  Box,
  Container,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import testImage from "./test.jpg";
import { LuTimerReset } from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";
import { TbClockHour7 } from "react-icons/tb";
import { FaLaptop, FaUsers } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchCourse } from "../../../redux/slices/course.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CourseDetails = ({ lang = "en" }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { course, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourse(id));
  }, [dispatch, id]);
  console.log("course", course);
  console.log("loading", loading);
  if (loading && !course) return <h1>Loading...</h1>;

  return (
    <>
      <Box sx={{ mt: 2, mb: 2, height: "85.7vh" }}>
        <Container maxWidth="xl">
          <Grid2 container spacing={2}>
            <Grid2
              item
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
                xl: 2,
              }}
            >
              <img
                src={testImage}
                alt="course"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "10rem",
                }}
              />
            </Grid2>
            <Grid2
              item
              size={{
                xs: 12,
                sm: 6,
                md: 8,
                lg: 9,
                xl: 10,
              }}
            >
              <Typography variant="h5">
                {course?.result.name[lang]} ({course?.result.category[lang]})
              </Typography>
              <Typography variant="body1">
                {course?.result.description[lang]}
              </Typography>

              <Box sx={{ mt: 5.8 }}>
                <Typography
                  variant="overline"
                  gutterBottom
                  sx={{ display: "block", color: "#555" }}
                >
                  More Info, Duration, Classes, hours
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      fontSize: "0.875rem",
                      marginTop: "8px",
                    }}
                  >
                    <LuTimerReset size={15} style={{ marginRight: "4px" }} />
                    {course?.result.duration[lang]}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      fontSize: "0.875rem",
                      marginTop: "8px",
                    }}
                  >
                    <TbClockHour7 size={15} style={{ marginRight: "4px" }} />
                    {course?.result.hours} hours
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      fontSize: "0.875rem",
                      marginTop: "8px",
                    }}
                  >
                    <SiGoogleclassroom
                      size={15}
                      style={{ marginRight: "4px" }}
                    />
                    {course?.result.classes} Classes
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      fontSize: "0.875rem",
                      marginTop: "8px",
                    }}
                  >
                    <FaLaptop size={15} style={{ marginRight: "4px" }} />
                    {course?.result.type}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      fontSize: "0.875rem",
                      marginTop: "8px",
                    }}
                  >
                    <FaUsers size={15} style={{ marginRight: "4px" }} />
                    {course?.result.attends} Students
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="overline"
                  gutterBottom
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Course Details
                </Typography>
                <Divider sx={{ mb: 0 }} />
                <List>
                  {course?.result.about[lang].map((detail, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                      <ListItemText
                        primary={
                          <Typography variant="body1" sx={{ color: "#555" }}>
                            {index + 1}. {detail}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography
                  variant="overline"
                  gutterBottom
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Owner Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      Hussein Salah
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      salahhussein176@gmail.com
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      01032929703
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
};

export default CourseDetails;
