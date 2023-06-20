'use client';

import {
  FiCalendar,
  FiClock,
  FiTrendingUp,
  FiUser,
  FiArrowDown,
  FiPlus,
} from 'react-icons/fi';

import { getTodayDate } from '@/utils/dates';
import { useContext } from 'react';
import { ActivitiesContext } from '@/utils/AppContext';

import { useState } from 'react';

export default function ActivityForm() {
  const [activity, setActivity] = useState({
    activityDate: getTodayDate(),
    activityTime: '',
    activityType: '',
    activityPitch: '',
    activityUser: '',
  });

  const { activities, setActivities } = useContext(ActivitiesContext);

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      activity.activityUser &&
      activity.activityType &&
      activity.activityPitch
    ) {
      const newActivity = { ...activity, id: new Date().getTime().toString() };
      setActivities([...activities, newActivity]);
      setActivity({ activityUser: '', activityPitch: '', activityType: '' });
    }
  };

  return (
    <div className='max-w-6xl mx-auto bg-white p-6 rounded-[5px] drop-shadow-boxShadow'>
      <h3 className=' text-center mb-12 mt-3 font-bold text-xl'>
        New Activity
      </h3>
      <form
        className='w-full flex flex-col items-center justify-center gap-8 mb-9 md:flex-row md:flex-wrap md:max-w-[1000px] md:mx-auto'
        onSubmit={handleSubmit}
      >
        <div className='input-container'>
          <input
            type='date'
            id='activityDate'
            name='activityDate'
            aria-labelledby='label-date'
            className='form-input'
            value={activity.activityDate}
            onChange={handleChange}
          />
          <label htmlFor='activityDate' className='form-label'>
            Activity Date
          </label>
          <FiCalendar className='form-icon' />
        </div>

        <div className='input-container'>
          <input
            type='time'
            id='activityTime'
            name='activityTime'
            aria-labelledby='label-time'
            className='form-input'
            value={activity.activityTime}
            onChange={handleChange}
          />
          <label htmlFor='activityTime' className='form-label'>
            Activity Time
          </label>
          <FiClock className='form-icon' />
        </div>

        <div className='input-container'>
          <select
            type='text'
            id='activityType'
            name='activityType'
            aria-labelledby='label-type'
            className='form-input appearance-none'
            onChange={handleChange}
            value={activity.activityType}
          >
            <option value='Undefined'>Select Type</option>
            <option value='Mowing'>Mowing</option>
            <option value='Fertilisation'>Fertilisation</option>
            <option value='Irrigation'>Irrigation</option>
            <option value='Aeration'>Aeration</option>
          </select>
          <label htmlFor='activityType' className='form-label'>
            Type
          </label>
          <FiArrowDown className='form-icon' />
        </div>

        <div className='input-container'>
          <input
            type='text'
            id='activityPitch'
            name='activityPitch'
            aria-labelledby='label-type'
            className='form-input'
            value={activity.activityPitch}
            onChange={handleChange}
          />
          <label htmlFor='activityPitch' className='form-label'>
            Pitch #
          </label>
          <FiTrendingUp className='form-icon' />
        </div>

        <div className='input-container'>
          <select
            type='text'
            id='activityUser'
            name='activityUser'
            aria-labelledby='label-type'
            className='form-input appearance-none'
            onChange={handleChange}
            value={activity.activityUser}
          >
            <option value='Undefined'>Select User</option>
            <option value='John'>John</option>
            <option value='Tom'>Tom</option>
            <option value='Tony'>Tony</option>
          </select>
          <label htmlFor='activityUser' className='form-label'>
            Assignment
          </label>
          <FiUser className='form-icon' />
        </div>
        <div className='input-container text-white'>
          <button className='form-button' type='submit'>
            Add Activity
          </button>
          <FiPlus className='form-icon' />
        </div>
      </form>
    </div>
  );
}
