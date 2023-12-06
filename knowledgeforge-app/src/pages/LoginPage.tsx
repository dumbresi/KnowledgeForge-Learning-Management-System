import React, { useState, ChangeEvent, FormEvent } from 'react';

function App(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function loginUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/auth/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    // Handle the 'data' as needed
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type="email"
        />
        <br />
        <input
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          type="password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
