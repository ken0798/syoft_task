export const heroPics = [24, 25, 26, 27];

export function randomPickImage(id) {
  return {
    large: `https://randomuser.me/api/portraits/men/${id}.jpg`,
    medium: `https://randomuser.me/api/portraits/med/men/${id}.jpg`,
    thumbnail: `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`,
  };
}

export function initialState(path) {
  return path
    ? { email: "", password: "", message: "", status: "" }
    : {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
        message: "",
        status: "",
      };
}
