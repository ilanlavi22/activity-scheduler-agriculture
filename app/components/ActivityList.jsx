'use client';
import { useContext } from 'react';
import { ActivitiesContext } from '@/utils/AppContext';
import { BiWinkSmile } from 'react-icons/bi';

import ActivityItem from './ActivityItem';

export default function ActivityList() {
  const { activities } = useContext(ActivitiesContext);
  return (
    <div className='bg-white p-6 pb-16 rounded-[5px] drop-shadow-boxShadow max-w-6xl mx-auto'>
      <h3 className='text-center mb-3 mt-3 font-bold text-xl leading-2'>
        Activities
      </h3>
      {activities.length ? (
        <>
          <h4 className='text-center font-semibold flex items-center justify-center mb-8 gap-2'>
            Total Activities
            <span className='text-2xl text-[#55A53F] font-bold'>35</span>
          </h4>

          <div className='hidden md:grid md:grid-cols-item uppercase font-bold text-sm text-center py-4'>
            <span>Date</span>
            <span>Time</span>
            <span>Type</span>
            <span>Assignee</span>
            <span>Pitch #</span>
            <span>Action</span>
          </div>

          {activities.map((activity) => (
            <ActivityItem key={activity.id} {...activity} />
          ))}
        </>
      ) : (
        <>
          <h4 className='text-center font-semibold flex items-center justify-center mb-4 gap-2 opacity-50'>
            No activities are scheduled
          </h4>
          <p className='text-center text-sm flex items-center justify-center gap-2 opacity-80'>
            Use the "New Activity" form above to start adding activities
            <BiWinkSmile className='text-2xl font-bold text-[#55A53F]' />
          </p>
        </>
      )}
    </div>
  );
}
