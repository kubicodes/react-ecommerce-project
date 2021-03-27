import { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords don´t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === 'displayName') setDisplayName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
  };

  return (
    <div>
      <h2>I don´t have an account</h2>
      <span>Sign up with your email and password</span>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Name</label>
          <input
            name='displayName'
            type='text'
            className='form-control'
            value={displayName}
            onChange={handleChange}
          />
        </div>
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
        <div className='form-group'>
          <label htmlFor='password'>Confirm Password</label>
          <input
            name='confirmPassword'
            type='password'
            className='form-control'
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-dark'>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
