const wait = (timeout: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(() => resolve, timeout));
};

export default wait;
