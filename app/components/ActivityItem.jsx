'use client';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { ActivitiesContext } from '@/utils/AppContext';
import { convertDate, convertTime } from '@/utils/dates';
import { useContext } from 'react';

export default function ActivityItem({
  id,
  activityDate,
  activityTime,
  activityType,
  activityPitch,
  activityUser,
}) {
  const { removeItem, isEditing, setIsEditing, editItem } =
    useContext(ActivitiesContext);
  return (
    <div className='border-t max-w-6xl mx-auto border-[rgb(188,182,173,0.5)] px-2 pr-2 md:px-0 py-4 last:border-b odd:bg-[#F9F5F2]'>
      <div className='flex w-full justify-between items-center gap-8 md:hidden'>
        <div className='flex flex-col w-full justify-between'>
          <div className='flex justify-between text-sm font-semibold'>
            <span>{convertDate(activityDate)}</span>
            <span>{convertTime(activityTime)}</span>
            <span>{activityUser}</span>
          </div>

          <div className='flex mt-3'>
            <div className='w-full flex flex-col gap-1'>
              <span className='font-semibold opacity-50 text-[0.6785rem] tracking-wide'>
                TYPE
              </span>
              <span className='text-[0.8125rem] font-light'>
                {activityType}
              </span>
            </div>

            <div className='w-full flex flex-col gap-1'>
              <span className='font-semibold opacity-50 text-[0.6785rem] tracking-wide'>
                PITCH #
              </span>
              <span className='text-[0.8125rem] font-light'>
                {activityPitch}
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center mx-auto flex-col justify-center gap-2'>
          <button
            className='flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-[#EB0D0D]'
            onClick={() => removeItem(id)}
          >
            <FiTrash2 className='text-white text-lg' />
          </button>
          <button
            className='flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-[#55A53F]'
            onClick={() => editItem(id)}
          >
            <FiEdit className='text-white text-lg' />
          </button>
        </div>
      </div>

      {/* md */}
      <div className='hidden md:grid md:grid-cols-item text-sm text-center'>
        <span>{convertDate(activityDate)}</span>
        <span>{convertTime(activityTime)}</span>
        <span>{activityType}</span>
        <span>{activityUser}</span>
        <span>{activityPitch}</span>

        <div className='flex items-center mx-auto justify-center gap-2'>
          <button
            className='flex items-center text-center justify-center w-8 h-8 rounded-full bg-[#EB0D0D]'
            onClick={() => removeItem(id)}
          >
            <FiTrash2 className='text-white text-lg' />
          </button>
          <button
            className='flex items-center text-center justify-center w-8 h-8 rounded-full bg-[#55A53F]'
            onClick={() => editItem(id)}
          >
            <FiEdit className='text-white text-lg' />
          </button>
        </div>
      </div>
    </div>
  );
}
