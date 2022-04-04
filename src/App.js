import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://simple-login-api.vercel.app/api/sign-in', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res =>
      res.json(),
    ).then(data => {
      console.log(data.message);
      setMessage(data.message);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Email</p>
      <input name="email" value={email} onChange={handleChange} />
      <p>Password</p>
      <input name="password" type='password' value={password} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}

export default App;