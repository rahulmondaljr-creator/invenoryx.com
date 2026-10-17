import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { getTopic, topicsByCategory } from "../data/topics";
import { getCategory } from "../data/categories";
import Icon from "../components/Icon";

export default function TopicPage() {
  const { slug } = useParams();
  const { t, lang: l } = useI18n();
  const lang = l === "bn" ? "bn" : "en";
  const topic = getTopic(slug || "");
  const [prog, setProg] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProg(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!topic) {
    return (
      <div className="phase-box glass-card reveal">
        <h2 style={{ fontSize: 44 }} className="grad-text">404</h2>
        <p style={{ marginTop: 10 }}>Topic not found.</p>
        <Link to="/categories" className="btn btn-primary" style={{ marginTop: 20 }}>
          {t("view_all")}
        </Link>
      </div>
    );
  }

  const cat = getCategory(topic.category);
  const sections = topic.content[lang];
  const related = topicsByCategory(topic.category)
    .filter((x) => x.slug !== topic.slug)
    .slice(0, 3);

  const copyFormula = (text: string, idx: number) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div>
      <div className="topic-prog" style={{ width: prog + "%" }} />

      <div className="topic-grid">
        <article>
          <p className="crumb reveal">
            <Link to="/categories">{t("nav_explore")}</Link>
            {" / "}
            {cat && <Link to={"/category/" + cat.id}>{cat.name[lang === "bn" ? "bn" : "en"]}</Link>}
            {" / "}{topic.slug}
          </p>

          <h2 className="reveal" style={{ fontSize: 26, fontWeight: 800, marginTop: 10 }}>
            {topic.title[lang]}
          </h2>

          <div className="t-meta reveal">
            <span className={"diff diff-" + topic.difficulty}>
              {t("diff_" + topic.difficulty)}
            </span>
            <span className="chip">{t("min_read").replace("{n}", String(topic.minutes))}</span>
            <span className="chip">{t("updated")}: {topic.updated}</span>
            {topic.tags.map((tag) => (
              <Link key={tag} to={"/search?q=" + encodeURIComponent(tag)} className="chip" style={{ color: "var(--secondary)" }}>
                #{tag}
              </Link>
            ))}
          </div>

          <p className="reveal" style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
            {topic.desc[lang]}
          </p>

          {sections.map((s, i) => (
            <section className="t-section reveal" key={i} id={"sec-" + i}>
              <h3>{s.heading}</h3>
              {s.type === "text" && s.body.map((p, j) => <p key={j}>{p}</p>)}
              {s.type === "list" && (
                <ul>
                  {s.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              )}
              {s.type === "formula" && (
                <div className="formula-box">
                  <div>
                    <code>{s.formula}</code>
                    {s.note && <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 6, marginBottom: 0 }}>{s.note}</p>}
                  </div>
                  <button className="copy-btn" onClick={() => copyFormula(s.formula, i)}>
                    {copiedIdx === i ? t("copied") : t("copy")}
                  </button>
                </div>
              )}
              {s.type === "table" && (
                <table className="t-table">
                  <thead>
                    <tr>{s.headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {s.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          ))}
        </article>

        <aside className="t-rail">
          <div className="glass-card toc reveal">
            <h4 style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
              {t("toc")}
            </h4>
            {sections.map((s, i) => (
              <a href={"#sec-" + i} key={i}>{s.heading}</a>
            ))}
          </div>

          {related.length > 0 && (
            <div className="glass-card toc reveal">
              <h4 style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
                {t("related")}
              </h4>
              {related.map((r) => (
                <Link to={"/topic/" + r.slug} key={r.slug}>
                  {r.title[lang]}
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
