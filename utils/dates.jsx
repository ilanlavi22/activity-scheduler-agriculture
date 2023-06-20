export const getTodayDate = () => {
  const todayDate = new Date().toISOString().substr(0, 10);
  return todayDate;
};

export const convertDate = (todayDate) => {
  let dateStr = todayDate;
  let parts = dateStr.split('-');
  let convertedDateStr = parts[2] + '/' + parts[1] + '/' + parts[0];
  return convertedDateStr;
};

export const convertTime = (todayTime) => {
  const [hours, minutes] = todayTime.split(':');
  let formattedTime = '';

  // Convert hours to 12-hour format
  const hour = parseInt(hours, 10);
  if (hour === 0) {
    formattedTime += '12';
  } else if (hour > 12) {
    formattedTime += (hour - 12).toString().padStart(2, '0');
  } else {
    formattedTime += hour.toString().padStart(2, '0');
  }

  formattedTime += `:${minutes} `;

  // Add AM or PM
  if (hour >= 12) {
    formattedTime += 'PM';
  } else {
    formattedTime += 'AM';
  }

  return formattedTime;
};
