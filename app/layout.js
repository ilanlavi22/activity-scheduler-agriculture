import './globals.css';
import { Inter } from 'next/font/google';
import { ActivitiesProvider } from '@/utils/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Activity Scheduler - Agriculture',
  description: 'Activity scheduler Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#E5DCCD]`}>
        <ActivitiesProvider>{children}</ActivitiesProvider>
      </body>
    </html>
  );
}
