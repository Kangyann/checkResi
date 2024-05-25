const colorClasses = [
  "btn-primary",
  "btn-secondary",
  "btn-accent",
  "btn-success",
  "btn-error",
  "btn-info",
  "btn-warning",
  "btn-neutral",
];

const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * colorClasses.length);
  return colorClasses[randomIndex];
};

export default getRandomColorClass;