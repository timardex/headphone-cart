const getImagePath = (name) => {
  return require(`../assets/images/${name}.jpg`).default;
};

export default getImagePath;
