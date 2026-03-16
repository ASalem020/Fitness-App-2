import { Outlet } from "react-router-dom";
import Header from "../shared/header";

export default function RootLayout() {
  return (
    <div className="root-layout">
      {/* Header */}
      <Header />

      {/* Content Rendered */}
      <Outlet />

      {/* Footer */}
      {/* Wait michle to merge his code */}
    </div>
  );
}
