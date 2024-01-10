import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import followersSlice from "./followersSlice";
export default configureStore({
  reducer: { profile: profileSlice, followers: followersSlice },
});
