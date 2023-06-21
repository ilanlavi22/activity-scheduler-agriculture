export default async function getWeather() {
  const res = await fetch(
    // using Incremental Static Regeneration (ISR)
    `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.OWM_API_KEY}&units=metric`,
    {
      next: { revalidate: 10 },
    }
  );
  if (!res.ok) return undefined;
  return res.json();
}
