import { useRouter } from 'next/router';
import React from 'react';
import {setUserInformation} from "../utils/setUserInfo"

const Login = () => {
    const router = useRouter();
    
    const handleLogin = event =>{ 
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const loginCredential = {email , password};
        

       const url = "http://localhost:5000/api/v1/user/login";
       fetch(url, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(loginCredential),
       })
         .then((res) => res.json())
         .then((userData) => {
            // setUserInformation(data);
            localStorage.setItem('user_info', JSON.stringify(userData.data));
            router.push('/');
         });
    }
    return (
      <div>
        Login
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default Login;