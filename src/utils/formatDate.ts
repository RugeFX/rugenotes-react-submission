const formatDate = (isoDate: string): string => {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date(isoDate));
};

export default formatDate;
