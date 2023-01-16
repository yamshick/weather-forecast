export const weatherTypeMapper = ({
  rainSum,
  precipitationSum,
  snowfallSum,
}) => {
  if (rainSum > 0) return "rainy";
  if (precipitationSum > 0) return "cloudy";
  if (snowfallSum > 0) return "snowy";
  return "sunny";
};
