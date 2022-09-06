const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const hexColors = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
];

// return an array of background/border colors with length of num
const backgroundColors = (num: number) =>
  hexColors.slice(0, num).map((color) => hex2rgba(color, 0.2));
const borderColors = (num: number) => hexColors.slice(0, num);

// array of colors red and blue
const greenAndRedBorderColors = ["#22c55e", "#ef4444"];
const greenAndRedBackgroundColors = [
  hex2rgba("#22c55e", 0.2),
  hex2rgba("#ef4444", 0.2),
];

export {
  backgroundColors,
  borderColors,
  greenAndRedBorderColors,
  greenAndRedBackgroundColors,
};
