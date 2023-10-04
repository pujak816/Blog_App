import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-white/80 text-slate-700 shadow-lg font-semibold py-2 px-28 flex justify-between items-center">
        <h3>Logo</h3>
        <ul className="flex items-center gap-14">
          <li className="w-5">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
