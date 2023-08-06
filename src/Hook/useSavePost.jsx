export const savePost = (userId, desc, image) => {

    const post = {
        userId,
        desc,
        likes: [],
        image
    }

    fetch('http://localhost:5000/posts', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Post published", data);
    })
}