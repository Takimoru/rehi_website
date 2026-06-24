import { Outlet } from "@tanstack/react-router";
import { FloatingWhatsAppButton } from "@/components/site/FloatingWhatsAppButton";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
