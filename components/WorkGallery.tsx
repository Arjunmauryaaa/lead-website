import { work } from "@/lib/content";
import SampleBadge from "./SampleBadge";

type W = (typeof work)[number];

function Tile({ w }: { w: W }) {
  const isWeb = w.kind === "Website" || w.kind === "Landing page";
  const isMail = w.kind === "Email";
  return (
    <figure className={`wtile wtile--${w.tone} ${isWeb ? "wtile--web" : isMail ? "wtile--mail" : "wtile--social"}`}>
      <div className="wtile__frame">
        {isWeb && (
          <div className="wtile__browser">
            <i />
            <i />
            <i />
            <span>{w.client.toLowerCase().replace(/\s+/g, "")}.com</span>
          </div>
        )}
        {isMail && (
          <div className="wtile__mailhead">
            <b>{w.client}</b>
            <span>Subject: {w.headline}</span>
          </div>
        )}
        {!isWeb && !isMail && (
          <div className="wtile__social">
            <span className="wtile__av" />
            <span>
              <b>{w.client}</b>
              <small>Sponsored</small>
            </span>
          </div>
        )}
        <div className="wtile__art">
          <span className="wtile__shape s1" />
          <span className="wtile__shape s2" />
          <p className="wtile__hl">{w.headline}</p>
          <span className="wtile__cta">{w.cta}</span>
        </div>
      </div>
      <figcaption>
        <span>{w.kind}</span>
        {w.title}
      </figcaption>
    </figure>
  );
}

export default function WorkGallery() {
  const row = [...work, ...work];
  return (
    <section className="gallery" aria-label="Our work">
      <div className="wrap gallery__head">
        <p className="kicker reveal">Our work</p>
        <h2 className="h2 reveal">
          Creative that <em>performs.</em> <SampleBadge />
        </h2>
        <p className="muted reveal">Ad creative, websites, social and email — designed to convert, not just to look good.</p>
      </div>
      <div className="gallery__rows">
        <div className="gallery__track">
          {row.map((w, i) => (
            <Tile key={i} w={w} />
          ))}
        </div>
        <div className="gallery__track gallery__track--rev" aria-hidden="true">
          {[...row].reverse().map((w, i) => (
            <Tile key={i} w={w} />
          ))}
        </div>
      </div>
    </section>
  );
}
