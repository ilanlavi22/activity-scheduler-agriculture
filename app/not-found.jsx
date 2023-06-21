import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-full h-screen flex items-center justify-center p-5 flex-col'>
      <h2 className='text-3xl font-bold py-4'>404</h2>
      <p className='text-base'>Uh oh! This post could not be found.</p>
      <p>
        <Link href='/' className=' underline'>
          Go back to Home
        </Link>
      </p>
    </div>
  );
}
