import Image from 'next/image';
import getWeather from '@/lib/getWeather';

export default async function WeatherMain() {
  const data = getWeather();
  const weatherData = await data;
  //  const { name, main, weather } = weatherData;

  return (
    <div className='flex items-center justify-center space-x-36 text-white'>
      <div className='flex flex-col'>
        <h4 className='text-2xl leading-10 font-light'>{weatherData?.name}</h4>
        <h5 className='text-[2.5rem] leading-7 font-black font-sans'>
          {weatherData?.main?.temp?.toFixed()}&#8451;
        </h5>
      </div>
      <div className='flex flex-col'>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
          width='80'
          height='80'
          alt='few clouds'
        />
        <p className='leading-none translate-y-[-15px] text-lg font-light capitalize'>
          {weatherData?.weather[0]?.description}
        </p>
      </div>
    </div>
  );
}
