import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="phase-box glass-card reveal">
      <h2 style={{ fontSize: 44 }} className="grad-text">404</h2>
      <p style={{ marginTop: 10 }}>পেজটি খুঁজে পাওয়া যায়নি।</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 20 }}>হোমে যাও</Link>
    </div>
  );
}
