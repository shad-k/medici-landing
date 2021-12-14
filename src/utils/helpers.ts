export const getTrimmedAddress = (address: string, split = 8) => {
  return `${address.substring(0, 8)}...${address.substring(
    address.length - 8
  )}`;
};
