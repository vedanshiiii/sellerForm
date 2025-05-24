'use client';

import { Toaster } from 'react-hot-toast';
import SellerForm from '@/components/SellerForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Seller Specification Feedback Form
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Customize your product enquiry experience by providing feedback on buyer questions
          </p>
        </div>
        <div className="mt-8">
          <SellerForm />
        </div>
      </div>
      <Toaster position="top-right" />
    </main>
  );
}
