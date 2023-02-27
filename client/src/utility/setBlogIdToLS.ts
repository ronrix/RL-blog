
  export function setBlogIdToLS(id: string) {
    // store the id of the blog to the localStorage, for later use
    // when the user reloads the blog page, it will be used for querying the data of that blog
    localStorage.setItem("blogId", id);
  }