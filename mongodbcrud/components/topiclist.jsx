import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./removebtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fectch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", Error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div
          key={t}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <p>{t.description}</p>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/edittopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
