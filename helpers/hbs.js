import fs from 'fs';
import hbs from 'hbs';

// Partial
hbs.registerPartial('search', fs.readFileSync(__dirname + '/../views/partials/search.hbs', 'utf8'));


// Filters
hbs.registerHelper('currency', (value) => {
  const formatted = '£' + value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  return formatted
});

hbs.registerHelper("counter",  (index) => {
  return index + 1;
});
