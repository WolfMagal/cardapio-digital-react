import axios from 'axios';

/*const api = axios.create({
    baseURL:'http://localhost:8080/api/v1',
    headers: { 
        'Authorization': 'Basic YWRtaW46YWRtaW4=', 
        'Content-Type': 'application/json', 
        'Cookie': 'JSESSIONID=1C91581BC2A20DB6DEC572BA9BA8D5E6'
      },
})*/

const api = axios.create({
    withCredentials: true,
    baseURL:'http://localhost:8080/',
    auth: {
        username: 'admin',
        password: 'admin'
      },
    headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4=', 
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
  /*  headers: { 
        'Authorization': 'Basic YWRtaW46YWRtaW4=', 
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=1C91581BC2A20DB6DEC572BA9BA8D5E6'
    }*/
})

export default api;