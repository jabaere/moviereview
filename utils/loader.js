const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 55}`;
};
export default imageLoader;
