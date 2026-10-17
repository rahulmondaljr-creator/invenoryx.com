import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { categories } from "../data/categories";
import Icon from "../components/Icon";

export default function Categories() {
  const { t } = useI18n();
  return (
    <div>
      <div className="page-head reveal">
        <h2>{t("nav_explore")}</h2>
        <p>{categories.length} {t("sec_categories")} — {t("topics_soon")}</p>
      </div>
      <div className="grid cats">
        {categories.map((c, i) => (
          <Link to={"/category/" + c.id} className="card reveal" key={c.id} style={{ animationDelay: `${(i % 8) * 0.04}s` }}>
            <div className="c-icon"><Icon name={c.icon} /></div>
            <h3>{c.name.bn}</h3>
            <p>{c.desc.bn}</p>
            <div className="c-foot">
              <span className="c-count">{t("topics_count").replace("{n}", String(c.subs.length))}</span>
              <Icon name="arrow" size={15} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
