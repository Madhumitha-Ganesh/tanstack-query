import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import CloudBook from './components/CloudBookPage/CloudBook';

// --- Lazy Load Pages ---
const HomePge = lazy(() => import('./components/HomePage/Home'));
const AboutPage = lazy(() => import('./components/AboutPage/About'));
const ProductPage = lazy(() => import('./components/ReactBookPage/ReactBook'));

const AppRoutes = () => {
    console.log('🛣️ [AppRoutes] Component mounting/re-mounting at', new Date().toISOString());
    const PageLoader = () => {
        // Use translation with fallback to avoid context issues
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">{'Loading...'}</p>
                </div>
            </div>
        );
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<HomePge />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/cloudbook" element={<CloudBook />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
