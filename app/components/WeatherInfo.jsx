export default function WeatherInfo() {
  return (
    <div className='flex items-center justify-center space-x-9 mt-2 md:mt-6'>
      <div className='flex flex-col text-white items-center leading-tight'>
        <span className='font-bold text-[1.4rem]'>30F</span>
        <span className='font-light'>Feels Like</span>
      </div>
      <div className='flex flex-col text-white items-center leading-tight'>
        <span className='font-bold text-[1.4rem]'>72%</span>
        <span className='font-light'>Humidity</span>
      </div>
      <div className='flex flex-col text-white items-center leading-tight'>
        <span className='font-bold text-[1.4rem]'>2MPH</span>
        <span className='font-light'>Winds</span>
      </div>
    </div>
  );
}
