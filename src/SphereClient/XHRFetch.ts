import {Fetch} from './Fetch.js';
import axios from 'axios';

export class XHRFetch{

        constructor(url : string , _fetch : Fetch){
          
            axios.get(url)
            .then(response => {
             const data = response.data;
             _fetch.getData(data)
           })
            .catch(error =>  _fetch.error(error) );
           };

        }

