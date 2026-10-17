import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "../i18n";
import { categories, catName, catDesc } from "../data/categories";
import Icon from "../components/Icon";

const popular = [
  { icon: "battery", bn: "লিথিয়াম-আয়ন ব্যাটারি", en: "Lithium-ion Battery", d: "Energy storage chemistry and BMS basics." },
  { icon: "cog", bn: "ব্রাশলেস ডিসি মোটর", en: "BLDC Motor", d: "How electronic commutation works." },
  { icon: "sun", bn: "সোলার পিভি সেল", en: "Solar PV Cell", d: "Photovoltaic energy conversion." },
  { icon: "brain", bn: "নিউরাল নেটওয়ার্ক", en: "Neural Network", d: "Basic structure and learning idea." },
];

const sims = [
  { icon: "circuit", to: "/p/circuit-sim", en: "Circuit Simulator", bn: "ব্যাটারি-রেজিস্টর-এলইডি সার্কিট শেখা" },
  { icon: "cog", to: "/p/mech-sim", en: "Gear Visualizer", bn: "গিয়ার অনুপাত ভিজুয়ালাইজেশন" },
  { icon: "sun", to: "/p/structural-sim", en: "Solar Output Model", bn: "সোলার আউটপুট লার্নিং মডেল" },
];

export default function Home() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  return (
    <div>
      <section className="hero reveal">
        <div>
          <span className="badge">INVENORYX · invenoryx.com</span>
          <h2 style={{ marginTop: 14 }}>{t("hero_title")}</h2>
          <p>{t("hero_sub")}</p>
          <div className="hero-btns">
            <Link to="/categories" className="btn btn-primary">
              {t("hero_b1")} <Icon name="arrow" size={16} />
            </Link>
            <Link to="/p/invention-lab" className="btn btn-ghost">{t("hero_b2")}</Link>
            <Link to="/p/learning-paths" className="btn btn-ghost">{t("hero_b3")}</Link>
          </div>
          <div className="hero-chips">
            <span className="chip">৩০ {t("sec_categories")}</span>
            <span className="chip">বাংলা · English · हिन्दी</span>
            <span className="chip">{t("chip_phases")}</span>
          </div>
          <form
            className="search-bar"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/search?q=" + encodeURIComponent(q));
            }}
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("home_search_ph")}
              aria-label={t("search_ph")}
            />
            <button className="btn btn-primary" type="submit">
              <Icon name="search" size={16} />
            </button>
          </form>
        </div>
        <div className="orb-wrap" aria-hidden="true">
          <div className="orb">
            <div className="orb-ring"><span className="orb-dot" /></div>
            <div className="orb-ring r2"><span className="orb-dot" /></div>
            <div className="orb-ring r3" />
            <div className="orb-core" />
          </div>
        </div>
      </section>

      <div className="section-head reveal">
        <h2>{t("sec_categories")}</h2>
        <Link to="/categories" className="link-more">{t("view_all")} →</Link>
      </div>
      <div className="grid cats">
        {categories.slice(0, 8).map((c, i) => (
          <Link
            to={"/category/" + c.id}
            className="card reveal"
            key={c.id}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="c-icon"><Icon name={c.icon} /></div>
            <h3>{catName(c, lang)}</h3>
            <p>{catDesc(c, lang)}</p>
            <div className="c-foot">
              <span className="c-count">{t("topics_count").replace("{n}", String(c.subs.length))}</span>
              <Icon name="arrow" size={15} />
            </div>
          </Link>
        ))}
      </div>

      <div className="section-head reveal">
        <h2>{t("sec_popular")}</h2>
        <span className="badge">{t("demo")}</span>
      </div>
      <div className="grid cols">
        {popular.map((p, i) => (
          <Link
            to={"/search?q=" + encodeURIComponent(p.en)}
            className="card reveal"
            key={p.en}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="c-icon"><Icon name={p.icon} /></div>
            <h3>{p.en}</h3>
            <p>{p.d}</p>
          </Link>
        ))}
      </div>

      <div className="section-head reveal">
        <h2>{t("sec_sims")}</h2>
        <span className="badge">{t("demo")}</span>
      </div>
      <div className="grid cols">
        {sims.map((s, i) => (
          <Link
            to={s.to}
            className="card reveal"
            key={s.en}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="c-icon"><Icon name={s.icon} /></div>
            <h3>{s.en}</h3>
            <p>{s.bn}</p>
          </Link>
        ))}
      </div>

      <div className="section-head reveal">
        <h2>{t("sec_ai")}</h2>
      </div>
      <Link to="/p/ai-learning" className="card reveal" style={{ display: "block" }}>
        <div className="c-icon"><Icon name="brain" /></div>
        <h3>{t("nav_aiLearning")}</h3>
        <p>
          Concept explanations, formula help, learning plans — secure backend AI
          arrives in Phase 6. The platform stays fully useful without it.
        </p>
      </Link>

      <footer className="footer">
        <p>
          <strong style={{ color: "var(--text)" }}>InvenoryX</strong> — {t("footer_text")}
          <br />© 2026 InvenoryX. {t("rights")}
        </p>
        <nav>
          <Link to="/p/about">About</Link>
          <Link to="/p/help">Help</Link>
          <Link to="/p/privacy">Privacy</Link>
          <Link to="/p/terms">Terms</Link>
        </nav>
      </footer>
    </div>
  );
}
