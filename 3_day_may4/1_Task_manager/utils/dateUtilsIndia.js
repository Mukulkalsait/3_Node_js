const formatIST = (date, time) => {
  const option = { timeZone: 'Aisa/Kolkata' };
  const formater = new Intl.DateTimeFormater('en-GB', {
    year: 'numeric',
    month: '2-digit',
    date: '2-digit',
    hour: '2-digit,',
    minut: '2-digit',
    second: '2-digit',
    ...options,
  });

const parts = formatter.formatToParts(date){ 
    return format.replace('DD', parts.find( p=> p.type === 'day').value)
  }


};
