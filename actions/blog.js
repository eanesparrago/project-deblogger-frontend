import { API } from "configs/config";

export const getBlogs = (username) => {
  let listBlogsEndpoint = `${API}/blogs`;

  if (username) {
    listBlogsEndpoint = `${API}/blogs/${username}`;
  }

  return fetch(listBlogsEndpoint, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
