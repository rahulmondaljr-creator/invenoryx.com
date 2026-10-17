import { Link, useSearchParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { categories, catName, catDesc } from "../data/categories";
import { topics } from "../data/topics";
import Icon from "../components/Icon";

export default function Search() {
  const { t, lang } = useI18n();
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const topicResults = q
    ? topics.filter((tp) =>
        [tp.title.en, tp.title.bn, tp.desc.en, tp.desc.bn, ...tp.tags]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
    : [];

  const catResults = q
    ? categories.filter((c) =>
        [c.name.en, c.name.bn, c.name.hi, c.desc.en, c.desc.bn, ...c.subs]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
    : categories;

  const topicLang = lang === "bn" ? "bn" : "en";

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

      {q && topicResults.length === 0 && catResults.length === 0 && (
        <div className="phase-box glass-card">
          <p>{t("no_results")}</p>
        </div>
      )}

      {topicResults.length > 0 && (
        <>
          <div className="section-head reveal">
            <h2>{t("res_topics")}</h2>
            <span className="badge">{topicResults.length}</span>
          </div>
          <div className="grid cols">
            {topicResults.map((tp, i) => (
              <Link
                to={"/topic/" + tp.slug}
                className="card reveal"
                key={tp.slug}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <h3>{tp.title[topicLang]}</h3>
                <p>{tp.desc[topicLang]}</p>
                <div className="c-foot">
                  <span className={"diff diff-" + tp.difficulty}>{t("diff_" + tp.difficulty)}</span>
                  <span className="c-count">{t("min_read").replace("{n}", String(tp.minutes))}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {catResults.length > 0 && (
        <>
          <div className="section-head reveal">
            <h2>{t("res_categories")}</h2>
            <span className="badge">{catResults.length}</span>
          </div>
          <div className="grid cats">
            {catResults.map((c, i) => (
              <Link
                to={"/category/" + c.id}
                className="card reveal"
                key={c.id}
                style={{ animationDelay: `${(i % 8) * 0.04}s` }}
              >
                <div className="c-icon"><Icon name={c.icon} /></div>
                <h3>{catName(c, lang)}</h3>
                <p>{catDesc(c, lang)}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
