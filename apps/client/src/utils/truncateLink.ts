export const truncateLink = (url: string, length: number = 30): string => {
  const chunkLength = length / 2;

  if (url.length <= length) {
    return url;
  }

  const startChunk = url.slice(0, chunkLength);
  const endChunk = url.slice(-chunkLength);

  return `${startChunk}..${endChunk}`;
};
