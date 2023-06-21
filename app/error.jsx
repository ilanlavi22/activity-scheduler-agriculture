'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='w-full h-screen flex items-center justify-center p-5 flex-col'>
      <h2 className='text-3xl font-bold py-4'>Something went wrong!</h2>
      <button
        className='underline'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
