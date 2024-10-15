import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link
        className="border-white border rounded-md p-4 hover:text-black hover:bg-white"
        href={'products'}
      >
        Go To Products
      </Link>
    </div>
  );
}
