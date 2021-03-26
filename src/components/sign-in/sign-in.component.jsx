import { useState } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            name='email'
            type='email'
            className='form-control'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            className='form-control'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className='btn btn-dark'
          style={{ marginRight: '10px' }}
        >
          Sign in
        </button>
        <button
          type='button'
          className='btn btn-primary'
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
