import React from 'react';

// Card Skeleton
export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
      <div className="h-56 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

// Hero Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse flex items-center justify-center">
      <div className="text-center space-y-4 px-6">
        <div className="h-16 bg-gray-400 rounded w-96 mx-auto"></div>
        <div className="h-8 bg-gray-400 rounded w-64 mx-auto"></div>
        <div className="flex gap-4 justify-center mt-8">
          <div className="h-12 bg-gray-400 rounded w-32"></div>
          <div className="h-12 bg-gray-400 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

// List Skeleton
export const ListSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(count)].map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
};

// Page Loader
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-blue-900 rounded-full animate-ping"></div>
          <div className="relative w-20 h-20 border-4 border-blue-900 border-t-yellow-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-blue-900 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default { CardSkeleton, HeroSkeleton, ListSkeleton, PageLoader };