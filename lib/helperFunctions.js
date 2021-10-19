export const getMediaTypeColor = (type) => {
  switch (type.toUpperCase()) {
    case "PDF":
      return "#7eb52c";
    case "VIDEO":
      return "#b52c7e";
    default:
      return "#eee";
  }
};
