export const heroPics = [24, 25, 26, 27];

export function randomPickImage(id) {
  return {
    large: `https://randomuser.me/api/portraits/men/${id}.jpg`,
    medium: `https://randomuser.me/api/portraits/med/men/${id}.jpg`,
    thumbnail: `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`,
  };
}

export function handleTimers(cb, time) {
  setTimeout(() => {
    cb((pre) => ({
      ...pre,
      message: "",
    }));
  }, time);
}
