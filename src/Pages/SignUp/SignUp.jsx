import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Lnk from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Avatar, Container, Divider, IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import GoogleIcon from "@mui/icons-material/Google";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaUser } from "react-icons/fa";
import { useState } from "react";
// import useToken from "../../Hooks/useToken";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Context/AuthProvider";
import { Copyright } from "@mui/icons-material";
import { saveUser } from "../../Hook/useSaveUser";
import { green } from "@mui/material/colors";
// import Loading from "../../Pages/Shared/Loading/Loading";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const { createUser, updateUser, loginProvider, setLoading } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  //   const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  //   if (token) {
  //     navigate("/");
  //   }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      file: selectedFile,
      //   file: data.get("file"),
      name: data.get("name"),
      password: data.get("password"),
    });

    console.log(selectedFile);

    //     console.log(data);
    const imageHostKey = import.meta.env.VITE_imgbb_key;

    setSignUpError("");
    // create user
    if (!selectedFile) {
      return setSignUpError(
        "You must upload a photo and complete the all fild"
      );
    }

    createUser(data.get("email"), data.get("password"))
      .then((result) => {
        const user = result.user;
        console.log(user);

        // const image = data.photo[0];
        // const formData = new FormData();
        // formData.append("image", image);

        //new
        const formData = new FormData();
        formData.append("image", selectedFile);

        console.log("Image for Upload", formData);

        const url = `https://api.imgbb.com/1/upload?key=06ce6f925ad5f14c1f00b8790294f2a5`;
        fetch(url, {
          method: "POST",
          body: formData,
          // body: formData,
        })
          .then((res) => res.json())
          .then((imageData) => {
            if (imageData.status) {
              const userInfo = {
                displayName: data.get("name"),
                photoURL: imageData.data.url,
              };

              updateUser(userInfo)
                .then(() => {
                  toast.success("Account created successfully");
                  saveUser(
                    data.get("name"),
                    imageData.data.url,
                    data.get("email"),
                    data.get("education"),
                    data.get("warks"),
                    data.get("address")
                  );
                  navigate(from, { replace: true });
                })
                .catch((error) => {
                  console.log(error);
                  setSignUpError(error);
                });
            }
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };

  // google login

  const handelGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(
          user?.displayName,
          user?.photoURL,
          user?.email,
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        );
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setSignUpError(errorMessage);
      });
  };

  return (
    <Grid container>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          //   width: 300,
          //   backgroundImage: "url(https://abroad.coursementor.com/images/studentlogin.svg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          //   backgroundSize: "",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ maxWidth: 500 }}
          src="https://abroad.coursementor.com/images/studentlogin.svg"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ height: "100vh" }}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="profileImg">
            <Avatar
              draggable
              sx={{ width: 90, height: 90, bgcolor: "secondary.main" }}
            >
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected File Preview"
                  style={{ Width: "100%", height: "100%" }}
                />
              ) : (
                <AddAPhotoIcon sx={{ fontSize: 40 }} />
              )}
            </Avatar>
          </label>

          <input
            style={{ display: "none" }}
            id="profileImg"
            type="file"
            required
            onChange={handleFileChange}
          />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit2}
            sx={{ mt: 1 }}
          >
            <Box>
              <TextField
                margin="dense"
                required
                fullWidth
                id="name"
                label="Your Full Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="education"
                label="Education Institute Name"
                name="education"
                autoComplete="education"
                autoFocus
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="warks"
                label="Warks of Compuny Name"
                name="warks"
                autoComplete="warks"
                autoFocus
              />
            </Box>
            <Box sx={{ display: "flex", columnGap: 1.6 }}>
              <TextField
                margin="dense"
                required
                fullWidth
                id="address"
                label="Lives In"
                name="address"
                autoComplete="address"
                autoFocus
              />

              <TextField
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="dense"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Typography sx={{ color: "red", my: 1.4 }}>
              {signUpError}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ py: 1.6, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Lnk href="#" variant="body2">
                  Forgot password?
                </Lnk>
              </Grid>
              <Grid item>
                <Lnk variant="body2">
                  <Link to="/login">{"Allredy have an account? Login"}</Link>
                </Lnk>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                mt: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handelGoogleLogin} sx={{ border: 0.5 }}>
                <GoogleIcon sx={{ fontSize: 45, color: green["800"] }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
