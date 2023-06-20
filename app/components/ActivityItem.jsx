import { FiTrash2 } from 'react-icons/fi';

import { convertDate, convertTime } from '@/utils/dates';

export default function ActivityItem({
  activityDate,
  activityTime,
  activityType,
  activityPitch,
  activityUser,
}) {
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
        <button className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[#EB0D0D]'>
          <FiTrash2 className='text-white text-xl' />
        </button>
      </div>

      {/* md */}
      <div className='hidden md:grid md:grid-cols-item text-sm text-center'>
        <span>{convertDate(activityDate)}</span>
        <span>{convertTime(activityTime)}</span>
        <span>{activityType}</span>
        <span>{activityUser}</span>
        <span>1</span>

        <button className='flex items-center mx-auto text-center justify-center w-10 h-10 rounded-full bg-[#EB0D0D]'>
          <FiTrash2 className='text-white text-xl' />
        </button>
      </div>
    </div>
  );
}
