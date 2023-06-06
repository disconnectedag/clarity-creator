'use client';

import React from 'react';
import Link from 'next/link';

const UserForm = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label className="bold block" htmlFor="user-name">
              Name:
            </label>
            <div className="mt-1">
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="bold block" htmlFor="user-email">
              Email:
            </label>
            <div>
              <input
                className="form-input"
                type="email"
                id="user-email"
                placeholder="jdoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-4">
            <Link href={'/landing'}>
              <input
                className="form-input rounded-md w-full hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                type="submit"
                value="Start"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
