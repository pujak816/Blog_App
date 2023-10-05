import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-slate-700 shadow-lg fixed w-full">
      <nav className="font-semibold py-4 w-1/2 mx-auto flex justify-between items-center">
        <h3>Logo</h3>
        <ul className="flex items-center gap-10">
          <li className="hover:text-black hover:font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black hover:font-bold">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
