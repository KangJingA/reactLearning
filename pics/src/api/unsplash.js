// all code related to axios
// reconifguration

import axios from 'axios';

// create instance of axios cilent

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID -or5329QZ-f0iKemoq6xcpjB_voqWT0QcJTRJ0W9ymI'
    }
});
