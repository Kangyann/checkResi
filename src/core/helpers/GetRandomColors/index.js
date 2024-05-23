const colorClasses = [
  "primary",
  "secondary",
  "accent",
  "success",
  "error",
  "info",
  "warning",
  "neutral",
];

const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * colorClasses.length);
  return colorClasses[randomIndex];
};

export default getRandomColorClass;