import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center bg-amber-400 text-white p-4 items-center border-b-5-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="mb-2 text-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Clarity Creator
          </Link>
        </div>
        <div className="links">
          <Link className="mx-2 text-white" href="/about">
            About
          </Link>
          <Link className="mx-2 text-white" href="/execution">
            Track
          </Link>
          <Link className="mx-2 text-white" href="/profile">
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
