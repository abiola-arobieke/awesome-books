import { DateTime } from './luxon.js';

// Show current date and time
const getDateTime = () => {
  setTimeout(() => {
    const todayDate = DateTime.now()
      .setLocale('en-US')
      .toLocaleString(DateTime.DATE_FULL);
    const timeNow = DateTime.now()
      .toLocaleString({
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h12',
      })
      .toUpperCase();
    const dateTimeNow = `${todayDate} ${timeNow}`;
    const dateTime = document.getElementById('date-time');
    dateTime.innerHTML = dateTimeNow;
    getDateTime();
  }, 1000);
};

export default getDateTime;
