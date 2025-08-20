import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';

const Home = lazy(() => import('./pages/Home'));
const OCRPage = lazy(() => import('./pages/OCRPage'));
const BulkMailPage = lazy(() => import('./pages/BulkMailPage'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools/ocr" element={<OCRPage />} />
            <Route path="/tools/bulk-mail" element={<BulkMailPage />} />
            <Route path="/tools/:slug" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster position="top-right" />
      </BrowserRouter>
    </QueryClientProvider>
  );
}