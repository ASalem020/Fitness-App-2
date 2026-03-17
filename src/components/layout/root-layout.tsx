import { Outlet } from "react-router-dom";
import Header from "../shared/header";
import Footer from "../shared/footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      {/* Header */}
      <Header />

      {/* Content Rendered */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}
