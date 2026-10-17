import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function Topbar({ onMenu }: { onMenu: () => void }) {
  const navigate = useNavigate();
  return (
    <header className="topbar">
      <button className="icon-btn menu-btn" onClick={onMenu} aria-label="Open menu">
        <Icon name="menu" />
      </button>
      <div className="tb-brand">INVENORYX</div>
      <div className="spacer" />
      <button className="icon-btn" onClick={() => navigate("/search")} aria-label="Search">
        <Icon name="search" />
      </button>
    </header>
  );
}
