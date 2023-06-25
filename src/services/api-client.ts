import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd329ebefa1b348ea8b56349e13c37ed5',
  },
});
