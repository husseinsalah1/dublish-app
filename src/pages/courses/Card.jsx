import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { LuTimerReset } from "react-icons/lu";
import { TbClockHour7, TbDeviceLaptopOff } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { FaLaptop } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
const Card = ({ course }) => {
  const lang = localStorage.getItem("lang") || "en";
  const { t } = useTranslation();

  let {
    _id,
    name,
    description,
    duration,
    hours,
    classes,
    type,
    attends,
    price,
    offerPrice,
    hasOffer,
    creationDate,
  } = course;
  creationDate = dayjs(creationDate).format("DD/MM/YYYY");

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
      <Box
        component="section"
        sx={{
          position: "relative",
          border: "1px solid #ccc",
        }}
      >
        <Grid2 container spacing={1}>
          <Grid2
            item
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <img
              src={course.image.url}
              alt="course"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
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
            }}
            sx={{
              padding: "16px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <Typography variant="h6">{name[lang]}</Typography>
            <Stack direction="row" spacing={2}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "gray",
                }}
              >
                {t("courses.creationDate")}: {creationDate}
              </Typography>
            </Stack>
            <Typography variant="body1" gutterBottom>
              {description[lang]}
            </Typography>
            <Box>
              <Typography
                variant="overline"
                gutterBottom
                sx={{ display: "block", color: "#555" }}
              >
                {t("courses.moreInfo")}, {t("courses.duration")},
                {t("courses.classes")}, {t("courses.type")},{" "}
                {t("courses.students")}
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
                  {duration[lang]}
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
                  {hours} {t("courses.hours")}
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
                  <SiGoogleclassroom size={15} style={{ marginRight: "4px" }} />
                  {classes} {t("courses.classes")}
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
                  {type === "online" ? (
                    <FaLaptop size={15} style={{ marginRight: "4px" }} />
                  ) : (
                    <TbDeviceLaptopOff
                      size={15}
                      style={{ marginRight: "4px" }}
                    />
                  )}
                  {type}
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
                  {attends} {t("courses.students")}
                </Typography>
              </Stack>
            </Box>

            <Stack direction="row" spacing={0} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 1, marginRight: 1, marginLeft: 1 }}
                href={`/course-details/${_id}`}
              >
                {t("courses.moreInfo")}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 1, marginRight: 1, marginLeft: 1 }}
                href="/course-details"
              >
                {t("courses.assignCourse")}
              </Button>
            </Stack>
            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                left: lang === "ar" ? 10 : "unset",
                right: lang === "ar" ? "unset" : 10,
                backgroundColor: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {hasOffer ? (
                <>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "line-through", color: "red" }}
                  >
                    ${price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "green" }}>
                    ${offerPrice}
                  </Typography>
                </>
              ) : (
                <Typography variant="body2">${price}</Typography>
              )}
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Card;
