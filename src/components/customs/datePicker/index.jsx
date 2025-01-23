import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Import the date adapter
import { Box, TextField } from "@mui/material";
import dayjs from "dayjs"; // Import dayjs for date formatting
import "./style.css";
export default function CustomDatePicker({
  label,
  setFieldValue,
  minDate,
  maxDate,
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <Box sx={{ mb: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            className="date-picker"
            sx={{ width: "100%" }}
            {...field}
            minDate={minDate ? dayjs(minDate) : undefined}
            maxDate={maxDate ? dayjs(maxDate) : undefined}
            value={field.value ? dayjs(field.value) : null}
            label={label}
            onChange={(value) => {
              const formattedDate = value
                ? dayjs(value).format("MM-DD-YYYY")
                : "";
              setFieldValue(field.name, formattedDate);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                {...field}
                {...props}
                label={label}
                fullWidth
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                style={{ marginBottom: 16, backgroundColor: "red" }}
              />
            )}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
