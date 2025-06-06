import { Toaster } from 'react-hot-toast';
import SellerForm from '@/components/SellerForm';

type Props = {
  params: Promise<{ productId: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Product Enquiry Form
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Product ID: {resolvedParams.productId}
          </p>
        </div>
        <div className="mt-12">
          <SellerForm />
        </div>
      </div>
      <Toaster position="top-right" />
    </main>
  );
} 