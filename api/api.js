import json from './mock/data.json';

let api = {};

api.getProperties = (postcode, callback) => {
  const result = [json].filter( (item) => {
    return item.area == postcode.trim().toUpperCase()
  })
  callback(result[0]);
}

export default api