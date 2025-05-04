const formatIST = (date, time) => {
  const option = { timeZone: 'Aisa/Kolkata' };
  const formater = new Intl.DateTimeFormater('en-GB', {
    year: 'numeric',
    month: '2-digit',
    date: '2-digit',
    hour: '2-digit,',
    minut: '2-digit',
    second: '2-digit',
    ...option,
  });

  const parts = formatter.formatToParts(date);
  return format
    .replace('DD', parts.find((p) => p.type === 'day').value)
    .replace('MM', parts.find((p) => p.type === 'month').value)
    .replace('YYYY', parts.find((p) => p.type === 'year').value);
};

const getToday = () => formatIST(new Date(), 'DD-MM-YYYY');

module.exports = { formatIST, getToday };
