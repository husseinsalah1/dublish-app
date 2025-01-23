import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./../../../../redux/slices/course.slice";
import { useTranslation } from "react-i18next";
import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  Skeleton,
  Grid2,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CourseCard from "./CourseCard";

const CoursesShow = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.courses);
  const lang = localStorage.getItem("lang") || "en";
  const skeletonArray = Array.from({ length: 8 });
  const result =
    courses && courses.result
      ? courses.result.filter((course) =>
          course.name[lang].toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  useEffect(() => {
    dispatch(fetchCourses({ limit: 10, page: 1 }));
  }, [dispatch]);

  return (
    <Container sx={{ py: 4 }}>
      <TextField
        placeholder={t("hero.search")}
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
          },
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {loading && (
        <Grid2 container spacing={1}>
          {skeletonArray.map((_, index) => (
            <Grid2 item key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={194}
                sx={{ borderRadius: 2, mb: 2 }}
              />
              <Skeleton width="60%" height={30} />
              <Skeleton width="40%" height={20} />
              <Skeleton width="80%" height={20} sx={{ mt: 1 }} />
            </Grid2>
          ))}
        </Grid2>
      )}

      {!loading && (
        <Grid2 container spacing={2}>
          {result.length > 0 ? (
            result.map((course) => (
              <Grid2
                item
                key={course._id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <CourseCard course={course} isAuthenticated={true} />
              </Grid2>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "text.secondary", mt: 4 }}
            >
              {t("hero.noCoursesMatch")}
            </Typography>
          )}
        </Grid2>
      )}
    </Container>
  );
};

export default CoursesShow;
