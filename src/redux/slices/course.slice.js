import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../services/apiServices";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (options, { rejectWithValue }) => {
    try {
      return await ApiService.get("/course/list", options);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCourse = createAsyncThunk(
  "fetchCourse",
  async (id, { rejectWithValue }) => {
    try {
      return await ApiService.get(`/course/get?_id=${id}`);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = { courses: [], loading: false, error: null };
const coursesSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default coursesSlice.reducer;
