const getDate = (unixTime) => {
  const date = new Date(unixTime);
  const dateString = date.toDateString();

  const hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const mm = date.getUTCMinutes() > 9 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`;
  return `${dateString}  at: ${hh}:${mm}`;
};

export default getDate;
