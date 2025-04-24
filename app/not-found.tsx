import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#13294E]">404</h1>
        <h2 className="text-3xl font-bold text-[#FAA71A] mt-4">Country Not Found</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          The country you're looking for doesn't exist or has been moved to a different location.
        </p>
        <Link 
          href="/"
          className="mt-8 inline-block bg-[#13294E] hover:bg-[#193966] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}