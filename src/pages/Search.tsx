import { Link, useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { categories } from "../data/categories";
import Icon from "../components/Icon";

export default function Search() {
  const { t } = useI18n();
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const results = q
    ? categories.filter((c) =>
        [c.name.en, c.name.bn, c.name.hi, c.desc.en, c.desc.bn, ...c.subs]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
    : categories;

  return (
    <div>
      <div className="page-head reveal">
        <h2>{t("search_ph")}</h2>
      </div>
      <form
        className="search-bar reveal"
        style={{ marginTop: 0, marginBottom: 26 }}
        onSubmit={(e) => {
          e.preventDefault();
          const v = (e.currentTarget.elements.namedItem("sq") as HTMLInputElement).value;
          setParams(v ? { q: v } : {});
        }}
      >
        <input name="sq" defaultValue={params.get("q") || ""} placeholder={t("search_ph")} />
        <button className="btn btn-primary" type="submit"><Icon name="search" size={16} /></button>
      </form>

      {results.length === 0 ? (
        <div className="phase-box glass-card">
          <p>{t("no_results")}</p>
        </div>
      ) : (
        <div className="grid cats">
          {results.map((c) => (
            <Link to={"/category/" + c.id} className="card reveal" key={c.id}>
              <div className="c-icon"><Icon name={c.icon} /></div>
              <h3>{c.name.bn}</h3>
              <p>{c.desc.bn}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
