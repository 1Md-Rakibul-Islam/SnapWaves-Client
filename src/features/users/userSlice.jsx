// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthProvider";

// const {user} = useContext(AuthContext);

// export const getCurrentUser = createAsyncThunk('getCurrentUser', async () => {
    
//     const response = await fetch(`http://localhost:5000/users?email=${user?.email}`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//         // authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
//       },
//     })
//     const res = await response.json()
//     const currentUser = res.result;
//     return currentUser
//   })

// const userSlice = createSlice({
//     name: 'currentUser',
//     initialState: {
//         user: {},
//         loading: false,
//     },
//     extraReducers: {
//         [getCurrentUser.pending]: (state, action)=> {
//             state.loading = true;
//         },
//         [getCurrentUser.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.currentUser = action.payload
//         },
//         [getCurrentUser.rejected]: (state, action) => {
//             state.loading = false;
//         }
//     }
// })

// export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define an async action to fetch the current user
export const getCurrentUser = createAsyncThunk('getCurrentUser', async (email) => {
    // console.log('emailD', email);
  const response = await fetch(`http://localhost:5000/users?email=${email}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data.result;
});

// Define a slice of the store for the current user
const userSlice = createSlice({
  name: 'currentUser',
  initialState: {
    currentUser: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
