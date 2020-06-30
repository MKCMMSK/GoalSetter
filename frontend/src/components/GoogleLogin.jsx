import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}
export default function GoogleLoginButton() {


return( 
<GoogleLogin
    clientId="1004621807794-p8l00rg7mov16oqp0ui2r1hku5po74qq.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onSuccess={console.log("worked")}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
);
}