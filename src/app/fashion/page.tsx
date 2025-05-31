
import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shirt } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fashion - EasyShope',
  description: 'Discover the latest trends in clothing, footwear, and accessories at EasyShope.',
};

export default function FashionPage() {
  const allProducts = getAllProducts();
  const fashionProducts = allProducts.filter(p => p.category.toLowerCase() === 'fashion');

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center mb-8">
        <Shirt className="h-10 w-10 mr-3 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">Latest Fashion Trends</h1>
      </div>
      
      {fashionProducts.length > 0 ? (
        <ProductGrid products={fashionProducts} />
      ) : (
        <Alert>
          <Shirt className="h-4 w-4" />
          <AlertTitle>Coming Soon!</AlertTitle>
          <AlertDescription>
            Our fashion collection is being updated with new styles. Check back for the latest arrivals!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
