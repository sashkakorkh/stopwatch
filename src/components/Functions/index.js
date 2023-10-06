export const getTimeString = (time) => {
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  return `${hours} : ${min} : ${sec}`;
};
