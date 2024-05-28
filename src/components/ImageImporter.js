// src/imageImporter.js
export const importAllImages = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

// Mengimpor semua gambar dari folder tertentu
const images = importAllImages(
  require.context("../assets/images/video", false, /\.(png|jpe?g|svg)$/)
);

export default images;
