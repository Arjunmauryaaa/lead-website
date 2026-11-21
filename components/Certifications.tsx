import { certifications } from "@/lib/content";
import SampleBadge from "./SampleBadge";

const issuerMark: Record<string, string> = { Google: "G", Meta: "M", HubSpot: "H", Semrush: "S" };

export default function Certifications() {
  const anySample = certifications.some((c) => c.sample);
  return (
    <section className="certs" aria-label="Certifications">
      <div className="wrap certs__inner">
        <div className="certs__label">
          <span className="certs__seal" aria-hidden="true">
            <svg viewBox="0 0 40 40">
              <path d="M20 3l4 3.5 5.2-.7 1.6 5 4.7 2.4-1.3 5.1 2.3 4.7-3.9 3.4-.4 5.3-5.2.9-3 4.4L20 34.7l-4.6 2.4-3-4.4-5.2-.9-.4-5.3-3.9-3.4 2.3-4.7-1.3-5.1L8.6 10.8l1.6-5 5.2.7z" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M14 20l4 4 8-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p>
            <b>Certified team</b>
            <span>Platform-certified specialists</span>
          </p>
          <SampleBadge show={anySample} />
        </div>
        <div className="certs__list">
          {certifications.map((c) => (
            <div className="cert reveal" key={c.name}>
              <span className={`cert__mark cert__mark--${c.issuer.toLowerCase()}`}>{issuerMark[c.issuer] ?? c.issuer[0]}</span>
              <span>
                <small>{c.issuer}</small>
                <b>{c.name}</b>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
