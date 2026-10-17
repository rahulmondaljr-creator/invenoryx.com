import { NavLink, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import Icon from "./Icon";
import { Zap, ChevronLeft, Globe, LogOut } from "lucide-react";

type Item = { k: string; to: string; icon: string; end?: boolean };

const groups: { key: string; items: Item[] }[] = [
  { key: "group_overview", items: [
    { k: "nav_home", to: "/", icon: "home", end: true },
    { k: "nav_explore", to: "/categories", icon: "compass" },
    { k: "nav_recent", to: "/p/recent", icon: "clock" },
    { k: "nav_bookmarks", to: "/p/bookmarks", icon: "bookmark" },
  ]},
  { key: "group_engineering", items: [
    { k: "nav_electrical", to: "/category/electrical", icon: "zap" },
    { k: "nav_electronics", to: "/category/electronics", icon: "cpu" },
    { k: "nav_mechanical", to: "/category/mechanical", icon: "cog" },
    { k: "nav_automotive", to: "/category/automotive", icon: "car" },
    { k: "nav_aircraft", to: "/category/aircraft", icon: "plane" },
    { k: "nav_space", to: "/category/space", icon: "rocket" },
    { k: "nav_ship", to: "/category/ship", icon: "ship" },
    { k: "nav_railway", to: "/category/railway", icon: "train" },
    { k: "nav_civil", to: "/category/civil", icon: "building" },
    { k: "nav_robotics", to: "/category/robotics", icon: "bot" },
    { k: "nav_energy", to: "/category/renewable", icon: "sun" },
    { k: "nav_manufacturing", to: "/category/manufacturing", icon: "factory" },
  ]},
  { key: "group_ai", items: [
    { k: "nav_aiLearning", to: "/p/ai-learning", icon: "brain" },
    { k: "nav_aiBuilder", to: "/p/ai-builder", icon: "sparkles" },
    { k: "nav_software", to: "/category/software", icon: "code" },
    { k: "nav_computer", to: "/category/computer", icon: "monitor" },
    { k: "nav_dataScience", to: "/p/data-science", icon: "database" },
  ]},
  { key: "group_tools", items: [
    { k: "nav_calculators", to: "/p/calculators", icon: "calculator" },
    { k: "nav_circuitSim", to: "/p/circuit-sim", icon: "circuit" },
    { k: "nav_mechSim", to: "/p/mech-sim", icon: "cog" },
    { k: "nav_structuralSim", to: "/p/structural-sim", icon: "layers" },
    { k: "nav_designStudio", to: "/p/design-studio", icon: "pentool" },
  ]},
  { key: "group_innovation", items: [
    { k: "nav_inventionLab", to: "/p/invention-lab", icon: "bulb" },
    { k: "nav_research", to: "/p/research", icon: "filesearch" },
    { k: "nav_patents", to: "/p/patents", icon: "filetext" },
    { k: "nav_workspace", to: "/p/workspace", icon: "folderkanban" },
    { k: "nav_myProjects", to: "/p/my-projects", icon: "folder" },
  ]},
  { key: "group_business", items: [
    { k: "nav_productDev", to: "/p/product-dev", icon: "package" },
    { k: "nav_mfgPlanner", to: "/p/mfg-planner", icon: "factory" },
    { k: "nav_startupLab", to: "/p/startup-lab", icon: "trending" },
    { k: "nav_intlBusiness", to: "/p/intl-business", icon: "globe" },
  ]},
  { key: "group_learning", items: [
    { k: "nav_learningPaths", to: "/p/learning-paths", icon: "route" },
    { k: "nav_tutorials", to: "/p/tutorials", icon: "book" },
    { k: "nav_practice", to: "/p/practice", icon: "target" },
    { k: "nav_savedLessons", to: "/p/saved-lessons", icon: "save" },
  ]},
  { key: "group_account", items: [
    { k: "nav_profile", to: "/p/profile", icon: "user" },
    { k: "nav_settings", to: "/p/settings", icon: "settings" },
    { k: "nav_security", to: "/p/security", icon: "shield" },
    { k: "nav_help", to: "/p/help", icon: "help" },
  ]},
];

export default function Sidebar({
  mobileOpen, onClose, collapsed, onToggle,
}: {
  mobileOpen: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const { t, lang, setLang } = useI18n();
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("ew-user");
    onClose();
    navigate("/login");
  };

  return (
    <>
      {mobileOpen && <div className="backdrop" onClick={onClose} />}
      <aside className={"sidebar" + (mobileOpen ? " open" : "")} aria-label="Main navigation">
        <div className="brand">
          <div className="brand-mark"><Zap size={20} /></div>
          <div className="brand-text">
            <h1>InvenoryX</h1>
            <p>{t("brand")}</p>
          </div>
        </div>

        <div className="side-scroll">
          {groups.map((g) => (
            <div className="nav-group" key={g.key}>
              <div className="g-label">{t(g.key)}</div>
              {g.items.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  end={it.end}
                  title={t(it.k)}
                  onClick={onClose}
                  className={({ isActive }) => "navlink" + (isActive ? " active" : "")}
                >
                  <Icon name={it.icon} />
                  <span>{t(it.k)}</span>
                </NavLink>
              ))}
            </div>
          ))}

          <div className="nav-group">
            <button className="navlink" style={{ width: "100%", background: "none", border: "none" }} onClick={signOut} title={t("nav_signOut")}>
              <LogOut size={18} />
              <span>{t("nav_signOut")}</span>
            </button>
          </div>
        </div>

        <div className="side-bottom">
          <div className="lang-row">
            <Globe size={16} />
            <select className="langsel" value={lang} onChange={(e) => setLang(e.target.value as any)} aria-label={t("language")}>
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
          <button className="collapse-btn" onClick={onToggle} aria-label="Collapse sidebar">
            <ChevronLeft size={16} style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform .3s" }} />
            <span>{collapsed ? "" : "—"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
