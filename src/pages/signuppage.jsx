import React,{useState} from 'react'
import Signup from '../../components/LoginSignup/Signup';
import Login from '../../components/LoginSignup/Login';


// import Authhoc from '../../../features/authentication/Authhoc';
const signuppage = () => {
  const [switchpage, setSwitchpage] = useState(false);
  

  return (
    <div className="">
      {switchpage ? (
        <Signup setSwitchpage={setSwitchpage} />
        ) : (
          <Login setSwitchpage={setSwitchpage} />
          )}
    </div>
  );
};

export default signuppage;
