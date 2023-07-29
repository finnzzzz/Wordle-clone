import Link from 'next/link';

export default function page() {
  return (
    <div className='h-screen flex items-center flex-col justify-center gap-3 bg-slate-200'>
      <h1 className=' font-semibold text-slate-700 text-3xl'>Wordle</h1>
      <h2>
        <Link href='/wordle' className='hover:underline text-2xl '>
          Start
        </Link>
      </h2>
    </div>
  );
}
