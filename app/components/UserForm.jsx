import React from 'react';

const UserForm = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="space-y-6" action="/" method="POST">
          <div>
            <label className="bold block" htmlFor="user-name">
              Name:
            </label>
            <div className="mt-1">
              <input
                className="form-input"
                type="text"
                id="user-name"
                placeholder="John Doe"
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
              />
            </div>
          </div>
          <div className="mx-1">
            <legend>Consent to Emails?</legend>
            <div className="flex gap-x-3">
              <div className="px-1">
                <label htmlFor="email-yes">Yes</label>
                <input
                  className="form-radio mx-1"
                  type="radio"
                  id="email-yes"
                  name="email-consent"
                  value="Yes"
                />
              </div>
              <div>
                <label htmlFor="email-no">No</label>
                <input
                  className="form-radio mx-1"
                  type="radio"
                  id="email-no"
                  name="email-consent"
                  value="No"
                />
              </div>
            </div>
            <div className="pt-4">
              <input
                className="form-input rounded-md w-full hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                type="submit"
                value="Start"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
