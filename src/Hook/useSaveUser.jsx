export const saveUser = (name, profileImg, email, education, warks, address) => {
    const user = {
      role: "user",
      name,
      email,
      phone: "",
      profileImg,
      coverPhotoURL: "",
      education,
      warks,
      address,
      about: "",
      relationship: "",
      followers: [],
      following: []
    };

    console.log( 'saveUser', user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        toast.success("User created Successfully");
        console.log(email);
      });
  };