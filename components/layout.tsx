import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/navbar/Navbar';
import RegisterModal from './modals/RegisterModal';
import LoginModal from './modals/LoginModal';

import ReviewModal from './modals/ReviewModal';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Toaster />
      <ReviewModal />
      <LoginModal />
      <RegisterModal />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
