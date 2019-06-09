import axios from 'axios';

export const getAllItems= async () => {
    const response = await axios.get('https://eshop-gula.herokuapp.com/api/items')

    return response.data
  };