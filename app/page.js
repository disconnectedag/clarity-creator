import React from 'react';
import Header from './components/Header';
import UserForm from './components/UserForm';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col px-6 lg:px-8">
        <h1 className="text-3xl font-bold underline text-center mt-4">
          Welcome to the Clarity Creator
        </h1>
        <p className="bold text-center my-4">Getting Started!</p>
        {/* User Info Form */}
        <UserForm />
      </div>
    </>
  );
};

export default HomePage;
