export const weatherMapper = (data) => {
  const forecast = [];
  console.log("weatherMapper", { data });
  try {
    const { daily } = data;
    for (let i = 0; i < 7; i++) {
      forecast.push({
        date: daily.time[i],
        maxT: daily["temperature_2m_max"][i],
        minT: daily["temperature_2m_min"][i],
        precipitationSum: daily["precipitation_sum"][i],
        rainSum: daily["rain_sum"][i],
        snowfallSum: daily["snowfall_sum"][i],
        windSpeedMax: daily["windspeed_10m_max"][i],
      });
    }
  } catch (e) {
    console.log(e);
  }
  console.log({ forecast });
  return forecast;
};
