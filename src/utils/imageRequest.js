export const imageRequest = (key, width, height, additionalEdits = {}) => {
  const imageRequest = JSON.stringify({
    bucket: import.meta.env.VITE_S3_BUCKET,
    key,
    edits: {
      resize: {
        width,
        height,
        fit: "cover",
      },
      ...additionalEdits,
    },
  });
  return btoa(imageRequest);
};
