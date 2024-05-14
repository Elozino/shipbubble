export const truncateText = (text: string | null) => {
  if (typeof text !== "string") {
    return text;
  } else if (text.length >= 17) {
    return `${text.substring(0, 15)}...`;
  } else {
    return text;
  }
};
