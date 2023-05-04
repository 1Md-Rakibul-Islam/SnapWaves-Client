import { useContext } from "react";
import { saveUser } from "./useSaveUser";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";


const { createUser, updateUser, loginProvider, setLoading } =
useContext(AuthContext);
const navigate = useNavigate();
const googleProvider = new GoogleAuthProvider();

export const handelGoogleLogin = () => {
  loginProvider(googleProvider)
    .then((result) => {
      const user = result.user;
      saveUser(
        "user",
        user?.displayName,
        user?.email,
        user?.photoURL,
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
      navigate("/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      setSignUpError(errorMessage);
    });
};
