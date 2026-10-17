import { Link, useParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { getCategory, catName, catDesc } from "../data/categories";
import Icon from "../components/Icon";

export default function CategoryPage() {
  const { slug } = useParams();
  const { t, lang } = useI18n();
  const cat = getCategory(slug || "");

  if (!cat) {
    return (
      <div className="phase-box">
        <h2>404</h2>
        <p>Category not found.</p>
        <Link to="/categories" className="btn btn-ghost" style={{ marginTop: 16 }}>
          {t("view_all")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="page-head reveal">
        <span className="badge">#{cat.id}</span>
        <h2 style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: "var(--primary)" }}><Icon name={cat.icon} size={26} /></span>
          {catName(cat, lang)}
        </h2>
        <p>{cat.name.en} · {cat.name.hi}</p>
        <p style={{ marginTop: 10 }}>{catDesc(cat, lang)}</p>
      </div>

      <div className="glass-card reveal" style={{ padding: 22 }}>
        <h3 style={{ fontSize: 15 }}>{t("subcategories")}</h3>
        <div className="sub-chips">
          {cat.subs.map((s) => (
            <span className="chip" key={s} style={{ color: "var(--text)" }}>{s}</span>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 18 }}>
          {t("topics_soon")}
        </p>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/categories" className="link-more">← {t("view_all")}</Link>
      </div>
    </div>
  );
}
