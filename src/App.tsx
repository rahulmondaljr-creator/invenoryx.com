import { Component, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import TopicPage from "./pages/TopicPage";
import Search from "./pages/Search";
import PhaseView from "./pages/PhaseView";
import NotFound from "./pages/NotFound";

class ErrorBoundary extends Component<{ children: ReactNode }, { err: boolean }> {
  state = { err: false };
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    if (this.state.err) {
      return (
        <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
          <div>
            <h2 style={{ marginBottom: 10 }}>Something went wrong</h2>
            <p style={{ color: "#94a3b8", marginBottom: 18 }}>
              The app crashed while loading. Tap below to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "11px 26px", borderRadius: 12, border: "none",
                background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                color: "#fff", fontWeight: 600, fontSize: 14,
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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
            <Route path="/topic/:slug" element={<TopicPage />} />
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
      <ErrorBoundary>
        <Shell />
      </ErrorBoundary>
    </BrowserRouter>
  );
}
