import { Link } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "../i18n";
import Icon from "../components/Icon";
import { Zap, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState<{ email?: string; pass?: string }>({});
  const [notice, setNotice] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2: typeof err = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e2.email = t("email_invalid");
    if (pass.length < 8) e2.pass = t("pass_short");
    setErr(e2);
    if (Object.keys(e2).length === 0) setNotice(true);
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card reveal">
        <div className="brand">
          <div className="brand-mark"><Zap size={20} /></div>
        </div>
        <h2>{t("welcome")}</h2>
        <p className="sub">InvenoryX — {t("tagline")}</p>

        <form onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="em">{t("email")}</label>
            <div className="input-row">
              <span className="lead"><Mail size={16} /></span>
              <input id="em" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </div>
            {err.email && <div className="err">{err.email}</div>}
          </div>
          <div className="field">
            <label htmlFor="pw">{t("password")}</label>
            <div className="input-row">
              <span className="lead"><Lock size={16} /></span>
              <input id="pw" type={show ? "text" : "password"} value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" style={{ paddingRight: 42 }} />
              <button type="button" className="eye-btn" onClick={() => setShow(!show)} aria-label="Toggle password visibility">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {err.pass && <div className="err">{err.pass}</div>}
          </div>

          <div className="auth-links">
            <label style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--muted)" }}>
              <input type="checkbox" style={{ accentColor: "var(--primary)" }} /> {t("remember")}
            </label>
            <Link to="/p/help">{t("forgot")}</Link>
          </div>

          <button className="btn btn-primary w-full" type="submit">{t("signin_btn")}</button>
        </form>

        {notice && (
          <div className="notice" role="alert">
            <Icon name="alert" size={18} />
            <div><strong>{t("notice_title")}</strong>{t("notice_text")}</div>
          </div>
        )}

        <p className="auth-alt">{t("no_account")} <Link to="/register">{t("register")}</Link></p>
        <p className="auth-alt"><Link to="/">{t("back_home")}</Link></p>
      </div>
    </div>
  );
}
