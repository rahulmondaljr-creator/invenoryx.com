import { Link } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "../i18n";
import Icon from "../components/Icon";
import { Zap, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [consent, setConsent] = useState(false);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2: Record<string, string> = {};
    if (name.trim().length < 2) e2.name = t("name_short");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e2.email = t("email_invalid");
    if (pass.length < 8) e2.pass = t("pass_short");
    if (pass2 !== pass) e2.pass2 = t("pass_mismatch");
    if (!consent) e2.consent = t("consent_required");
    setErr(e2);
    if (Object.keys(e2).length === 0) setNotice(true);
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card reveal">
        <div className="brand"><div className="brand-mark"><Zap size={20} /></div></div>
        <h2>{t("create_acc")}</h2>
        <p className="sub">InvenoryX — invenoryx.com</p>

        <form onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="nm">{t("name")}</label>
            <div className="input-row">
              <span className="lead"><User size={16} /></span>
              <input id="nm" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </div>
            {err.name && <div className="err">{err.name}</div>}
          </div>
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
              <input id="pw" type={show ? "text" : "password"} value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="new-password" style={{ paddingRight: 42 }} />
              <button type="button" className="eye-btn" onClick={() => setShow(!show)} aria-label="Toggle password">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {err.pass && <div className="err">{err.pass}</div>}
          </div>
          <div className="field">
            <label htmlFor="pw2">{t("confirm_password")}</label>
            <div className="input-row">
              <span className="lead"><Lock size={16} /></span>
              <input id="pw2" type="password" value={pass2} onChange={(e) => setPass2(e.target.value)} autoComplete="new-password" />
            </div>
            {err.pass2 && <div className="err">{err.pass2}</div>}
          </div>
          <label className="check-row">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>{t("consent")}</span>
          </label>
          {err.consent && <div className="err" style={{ marginTop: -10, marginBottom: 12 }}>{err.consent}</div>}

          <button className="btn btn-primary w-full" type="submit">{t("signup_btn")}</button>
        </form>

        {notice && (
          <div className="notice" role="alert">
            <Icon name="alert" size={18} />
            <div><strong>{t("notice_title")}</strong>{t("notice_text")}</div>
          </div>
        )}

        <p className="auth-alt">{t("have_account")} <Link to="/login">{t("login")}</Link></p>
        <p className="auth-alt"><Link to="/">{t("back_home")}</Link></p>
      </div>
    </div>
  );
}
