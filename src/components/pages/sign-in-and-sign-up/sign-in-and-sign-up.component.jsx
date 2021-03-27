import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';

const SignInAndSignUp = () => {
  return (
    <div className='row'>
      <div className='col-6'>
        <SignIn />
      </div>
      <div className='col-6'>
        <SignUp />
      </div>
    </div>
  );
};

export default SignInAndSignUp;
