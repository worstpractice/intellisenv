export const loggingIdentity = <T>(t: T): T => {
  console.log(t);

  return t;
};
