import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
            <p className="mt-2 text-gray-600">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <Link
                href="/products"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
                Back to Products
            </Link>
        </div>
    );
}