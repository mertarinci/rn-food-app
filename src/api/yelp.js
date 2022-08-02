import axios from 'axios';


export default axios.create({

    baseURL: "https://api.yelp.com/v3/businesses/",
    headers: {
        Authorization: 'Bearer AWmhRAPiIOAA7p2idaTJHvtMJSc_y7XnBof6RTuMqvzOPl7Gz31eGSK9lVjwKfZ1b9P5jANtO_-_ktjszaya7TbxFShdtqdwlJMXhH0b59t0c4fPIcNmdWr1YKTnYnYx'
    }

});

