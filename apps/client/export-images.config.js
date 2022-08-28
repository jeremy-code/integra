/**
 * @type {import('next-export-optimize-images').Config}
 */
const nextImagesConfig = {
  outDir: "dist",
  imageDir: "_images",
  convertFormat: [
    ["png", "webp"],
    ["jpg", "webp"],
  ],
};

module.exports = nextImagesConfig;
