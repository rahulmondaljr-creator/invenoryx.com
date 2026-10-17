import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Search from "./pages/Search";
import PhaseView from "./pages/PhaseView";
import NotFound from "./pages/NotFound";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Shell() {
  const { pathname } = useLocation();
  const auth = pathname === "/login" || pathname === "/register";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={"app" + (collapsed && !auth ? " collapsed" : "")}>
      <ScrollTop />
      {!auth && (
        <Sidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          collapsed={collapsed}
          onToggle={() => setCollapsed((c) => !c)}
        />
      )}
      <div className="main">
        {!auth && <Topbar onMenu={() => setMobileOpen(true)} />}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/p/:key" element={<PhaseView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
