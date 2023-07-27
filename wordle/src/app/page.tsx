import Link from "next/link";

export default function page() {
  return (
    <>
      <h1 className=" text-white text-6xl">
        <Link href="/wordle">Start</Link>
      </h1>
    </>
  );
}
