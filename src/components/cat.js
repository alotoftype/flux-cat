import axios from 'axios';
import keys from '../apikeys';


const getData = ()=> {
    const cat_api = keys.cat
    return  function() {
      const myData =   axios({
            method: 'get',
            url: `https://thecatapi.com/v1/images`,
            headers: {
                'x-api-key': `${cat_api}`
            }
        }
        )
        .then(({...data}) => data );
        console.log('Hello From get_cat_data function')
        return  myData
    }
}

export default getData