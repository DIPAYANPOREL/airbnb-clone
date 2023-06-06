import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/models/Modal";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbub",
  description: "Airbub-clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen={true}/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
