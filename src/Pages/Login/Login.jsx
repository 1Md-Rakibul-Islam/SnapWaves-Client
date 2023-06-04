import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Lnk from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const {user, signIn} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    signIn(data.get("email"), data.get("password"))
    .then(() => {
      toast.success('Login successfully')
      navigate(from, { replace: true });
      
    })
    .catch(error => console.error(error));
  };



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: 400,
          mx: 5,
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
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
              <Link to={"/signup"}>
                <Lnk href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Lnk>
              </Link>
            </Grid>
          </Grid>
          {/* <Box
              sx={{
                display: "flex",
                mt: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={() => handelGoogleLogin} sx={{ border: 0.5 }}>
                <GoogleIcon sx={{ fontSize: 45, color: green["800"] }} />
              </IconButton>
          </Box> */}
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
