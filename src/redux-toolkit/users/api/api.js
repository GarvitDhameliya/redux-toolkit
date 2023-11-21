import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("getUser", async () => {
  return axios.get("http://localhost:3001/posts").then((res) => {
    const data = res.data;
    return {
      data,
    };
  });
});

export const addUser = createAsyncThunk("addUser", async (data) => {
  return axios.post("http://localhost:3001/posts", data).then((res) => {
    console.log(res);
    const data = res.data;
    return data;
  });
});
