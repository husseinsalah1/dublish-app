import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Tooltip,
  CardHeader,
  Chip,
} from "@mui/material";
import { MdOutlineReadMore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";

const CourseCard = ({ course }) => {
  const lang = localStorage.getItem("lang") || "en"; // Fallback to "en"
  const { t } = useTranslation();

  return (
    <Card
      className={style.course_card}
      sx={{
        maxWidth: 400,
        boxShadow: 1,
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardHeader
        title={course.name[lang]}
        subheader={
          <Chip
            label={course.category[lang]}
            color="secondary"
            size="small"
            sx={{ fontSize: "0.65rem", borderRadius: "4px" }}
          />
        }
        titleTypographyProps={{
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        subheaderTypographyProps={{
          fontSize: "0.8rem",
        }}
      />
      <CardMedia
        component="img"
        width={"100%"}
        height="194"
        image={course.image.url}
        alt={course.name[lang]}
        sx={{ objectFit: "cover" }}
      />
      <CardContent className={style.course_content}>
        <Typography
          className={style.course_description}
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {course.description[lang]}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Tooltip title={t("hero.readMoreAboutCourse")} placement="top">
          <IconButton aria-label="add to favorites">
            <MdOutlineReadMore />
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          ${course.price || "Free"}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
