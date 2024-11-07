import Index from '@/components/footer/Index'
import {Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const montserrat = Montserrat({
  subsets: ['latin'],   // Define language subsets (e.g., latin, latin-ext)
  weight: ['100','200','300','400','500','600','700'],        // Choose weights like '400', '700' as needed
  style: 'normal',      // Define style (e.g., 'normal', 'italic')
});


export const metadata = {
  title: "Vijyapana Advertisements",
  description: "Vijyapana Advertisements offers expert video production, product photography, audiobook creation, and print media solutions to enhance brand visibility. Specializing in corporate gifts and social media creatives, Vijyapana delivers customized advertising services that captivate audiences. Our professional team ensures high-quality visuals and impactful content. Choose Vijyapana to elevate your brand and make a lasting impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${montserrat.variable} antialiased`}
      >
        
        <Navbar/>
        {children}
        <Index/>
      </body>
    </html>
  );
}
