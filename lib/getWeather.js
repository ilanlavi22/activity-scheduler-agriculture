export default async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.OWM_API_KEY}`
  );
  if (!res.ok) return undefined;
  return res.json();
}
