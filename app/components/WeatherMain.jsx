import Image from 'next/image';
import getWeather from '@/lib/getWeather';
import Loading from '../loading';

export default async function WeatherMain() {
  const data = getWeather();
  const weatherData = await data;

  if (!weatherData) {
    return Loading;
  }

  const { name, main, weather } = weatherData;

  return (
    <div className='flex items-center justify-center space-x-36 text-white'>
      <div className='flex flex-col'>
        <h4 className='text-2xl leading-10 font-light'>{name}</h4>
        <h5 className='text-[2.5rem] leading-7 font-black font-sans'>
          {main?.temp?.toFixed()}&#8451;
        </h5>
      </div>
      <div className='flex flex-col'>
        <Image
          src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          width='80'
          height='80'
          alt='few clouds'
        />
        <p className='leading-none translate-y-[-15px] text-lg font-light capitalize'>
          {weather[0]?.description}
        </p>
      </div>
    </div>
  );
}
