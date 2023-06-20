import Link from 'next/link';
import {
  WeatherInfo,
  WeatherMain,
  ActivityList,
  ActivityForm,
  WeatherSearch,
} from './components';

export default function Home() {
  return (
    <main>
      <section className='w-full min-h-[45vh] bg-hero bg-cover bg-center'>
        <h1 className='text-white py-4 font-semibold text-[2.5rem] text-center'>
          <Link href='/'>Agriculture</Link>
        </h1>

        <WeatherSearch />
        <WeatherMain />
        <WeatherInfo />
      </section>

      <section className='w-full mt-[-45px] md:mt-[-60px] p-6'>
        <ActivityForm />
      </section>

      <section className='w-full p-6'>
        <ActivityList />
      </section>
    </main>
  );
}
