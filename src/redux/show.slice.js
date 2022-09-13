import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosTMDB } from "../utils/axios";

const initialState = {
  shows: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  showDetails: null,
  episodes: [],
};

// fetch tvshows
export const fetchShows = createAsyncThunk("shows/fetchShows", async () => {
  const response = await axiosTMDB.get("tv/popular");
  return response.data;
});
// fetch details
export const fetchDetails = createAsyncThunk("shows/fetchDetails", async id => {
  const response = await axiosTMDB.get(`tv/${id}`);
  return response.data;
});
// search shows
export const searchQuery = createAsyncThunk(
  "shows/searchQuery",
  async query => {
    const response = await axiosTMDB.get(`search/tv?query=${query}`);
    return response.data;
  }
);

// fetch Episodes
export const fetchEpisodes = createAsyncThunk(
  "shows/fetchEpisodes",
  async (tv_id, season_number) => {
    const response = await axiosTMDB.get(`tv/${tv_id}/season/${season_number}`);
    return response.data;
  }
);

const showSlice = createSlice({
  name: "shows",
  initialState,

  extraReducers(builder) {
    builder
      .addCase(fetchShows.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shows = action.payload.results;
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.showDetails = action.payload;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchQuery.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shows = action.payload.results;
      })
      .addCase(searchQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEpisodes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.episodes = action.payload.episodes.slice(0, 10);
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectShows = state => state.show.shows;
export const selectShowDetails = state => state.show.showDetails;
export const selectError = state => state.show.error;
export const selectEpisodes = state => state.show.episodes;

export default showSlice.reducer;
