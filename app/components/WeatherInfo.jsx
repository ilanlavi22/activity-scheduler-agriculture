import getWeather from '@/lib/getWeather';

export default async function WeatherInfo() {
  const data = getWeather();
  const weatherData = await data;

  return (
    <div className='flex items-center justify-center space-x-9 mt-2 md:mt-6'>
      <div className='flex flex-col text-white items-center leading-tight'>
        <span className='font-bold text-[1.4rem] font-sans'>
          {Math.round(weatherData?.main?.feels_like)}&#8451;
        </span>
        <span className='font-light'>Feels Like</span>
      </div>
      <div className='flex flex-col text-white items-center leading-tight'>
        <span className='font-bold text-[1.4rem]'>
          {weatherData?.main?.humidity}&#37;
        </span>
        <span className='font-light'>Humidity</span>
      </div>
      <div className='flex flex-col text-white items-center leading-tight'>
        <span className='font-bold text-[1.4rem]'>
          {weatherData.visibility / 1000} km
        </span>
        <span className='font-light'>Winds</span>
      </div>
    </div>
  );
}
