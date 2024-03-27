const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  export const getMouth = (month: string): string => {
    return months[parseInt(month) - 1];
  };
  
  const getDate = (date: string): string => {
    const longDate = date.split("T")[0];
  
    const newDate =
      longDate.split("-")[2] +
      " " +
      months[parseInt(longDate.split("-")[1]) - 1] +
      " " +
      longDate.split("-")[0];
    return newDate;
  };
  
  export default getDate;