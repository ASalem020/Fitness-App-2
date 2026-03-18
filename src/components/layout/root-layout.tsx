import { Outlet } from "react-router-dom";
import Header from "../shared/header";
import Footer from "../shared/footer";

export default function RootLayout() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Content Rendered */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
