export const fetchWeather = async (/*inputVal:HTMLInputElement*/) => {
  // Call an external API endpoint to get posts
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=eeaedc426e9a4dac89032e7e32c7b718`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=eeaedc426e9a4dac89032e7e32c7b718`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
