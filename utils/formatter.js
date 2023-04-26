export const formatDate = (date, displayHour = false) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  if (displayHour == false) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
};
