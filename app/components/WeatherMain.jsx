import Image from 'next/image';

export default function WeatherMain() {
  return (
    <div className='flex items-center justify-center space-x-36 text-white'>
      <div className='flex flex-col'>
        <h4 className='text-2xl leading-10 font-light'>Berlin</h4>
        <h5 className='text-[2.5rem] leading-7 font-black'>30F</h5>
      </div>
      <div className='flex flex-col'>
        <Image
          src='https://openweathermap.org/img/wn/02d@2x.png'
          width='80'
          height='80'
          alt='few clouds'
        />
        <p className='leading-none translate-y-[-15px] text-lg font-light'>
          Cloudy Sky
        </p>
      </div>
    </div>
  );
}
