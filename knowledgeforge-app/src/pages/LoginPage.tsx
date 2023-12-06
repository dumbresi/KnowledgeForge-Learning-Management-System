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
      <h1>Proceed to Login</h1>
      <form onSubmit={loginUser}>
		<label>
			Email
        <input
		className='border-2'
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type="email"
        />
		</label>
        <br/>
		<label>
			Password
		<input
			className='border-2'
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          type="password"
        />

		</label>
        
        <br />
        {/* <input type="submit" value="Login" /> */}
		<button className='border-2 border-black p-2' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
