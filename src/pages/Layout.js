import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div style={{ height: "calc(100vh - 60px)" }}>
        <Outlet />
      </div>
    </>
  );
}
