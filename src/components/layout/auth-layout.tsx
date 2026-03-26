import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      {/* Left Part */}
      <div className="flex items-center justify-center border-r border-orange-600 bg-orange-50">
        left-part
      </div>

      {/* Right Part */}
      <div className="flex items-center justify-center bg-black/75">
        <Outlet />
      </div>
    </div>
  );
}
