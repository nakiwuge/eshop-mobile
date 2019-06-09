import axios from 'axios';

export const register = async (data) => {
    let res;
    
    await axios.post('https://eshop-gula.herokuapp.com/api/register', data)
    .then((response)=>{
        res= response.data
    })
    .catch((error)=>{
        res= error.response.data
    })

    return res
  };