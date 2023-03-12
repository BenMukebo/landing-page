export const truncateStr = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

// const truncatedTitle = truncateStr(title, 10);