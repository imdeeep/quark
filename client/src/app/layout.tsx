import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quark - Modern Coding Platform',
  description: 'Elevate your coding journey with programming contests and assessments',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col ">
              <ThemeProvider>

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
