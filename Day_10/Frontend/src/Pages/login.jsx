import React from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log('🚀 ~ email:', email);
  console.log('🚀 ~ password:', password);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:7300/login', { email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="text"
        placeholder="enter your email..."
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="pass">Password</label>

      <input
        id="pass"
        type="password"
        placeholder="enter your password..."
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};