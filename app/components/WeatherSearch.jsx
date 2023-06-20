import { FiSearch } from 'react-icons/fi';
export default function WeatherSearch() {
  return (
    <form className='flex mx-auto max-w-[700px] px-9 relative'>
      <input
        type='text'
        placeholder='Enter Location'
        className='w-full p-[0.7rem] rounded-[10px] border-none outline-none bg-[rgb(255,255,255,0.4)] text-white text-base placeholder:text-white drop-shadow-boxShadow'
      ></input>
      <button className='absolute top-0 right-[55px] translate-y-2/3'>
        <FiSearch className='text-white text-xl' />
      </button>
    </form>
  );
}
