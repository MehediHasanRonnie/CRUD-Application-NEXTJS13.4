import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-900 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        NextCRUD
      </Link>
      <Link className="bg-white p-2 rounded-sm font-bold" href={"/addtopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
