import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#FAA71A]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#13294E] mb-2">Service Not Found</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find the service you're looking for. It may have been moved or doesn't exist.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-[#13294E] text-white rounded-md transition-all hover:bg-[#13294E]/90"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Services</span>
        </Link>
      </div>
    </div>
  );
}