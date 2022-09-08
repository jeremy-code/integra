export const convertToUSD = (amount: number): string => {
  return amount?.toLocaleString("en-US", {
    notation: "compact",
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
