import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-white/80 text-slate-700 font-semibold py-2 px-14 flex justify-between items-center">
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
    </>
  );
}
