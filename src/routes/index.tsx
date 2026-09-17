import { createFileRoute } from "@tanstack/react-router";
import installation from "@/assets/lichtung-installation.jpg";
import nora from "@/assets/nora-vahle.jpg";
import tomas from "@/assets/tomas-berge.jpg";
import ines from "@/assets/ines-kral.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kunstverein Lichtung — Region Hannover" },
      { name: "description", content: "Zeitgenössische Kunst, Ausstellungen und Vermittlung beim Kunstverein Lichtung in Hannover." },
      { property: "og:title", content: "Kunstverein Lichtung — Region Hannover" },
      { property: "og:description", content: "Zeitgenössische Kunst, Ausstellungen und Vermittlung — offen für alle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const exhibitions = [
  { date: "bis 14.12.", title: "Stille Verschiebung", meta: "Nora Vahle — Malerei, Raum", tone: "bg-cool" },
  { date: "18.01.–02.03.", title: "Nachbilder", meta: "Tomas Berge, Ines Kral — Fotografie", tone: "bg-ochre-soft" },
  { date: "21.03.–27.04.", title: "Loses Gefüge", meta: "Jahresausstellung der Mitglieder", tone: "bg-vermilion-soft" },
];

const artists = [
  { name: "Nora Vahle", role: "Malerei, Rauminstallation", image: nora, alt: "Porträt der Künstlerin Nora Vahle in ihrem Atelier" },
  { name: "Tomas Berge", role: "Fotografie", image: tomas, alt: "Porträt des Fotografen Tomas Berge in seinem Atelier" },
  { name: "Ines Kral", role: "Fotografie, Archivarbeit", image: ines, alt: "Porträt der Künstlerin Ines Kral mit einer Druckgrafik" },
];

const events = [
  ["SA 23.11. · 15 UHR", "Kuratorenführung", "Rundgang durch „Stille Verschiebung“ mit Jens Ohlendorf."],
  ["DO 05.12. · 19 UHR", "Künstlergespräch mit Nora Vahle", "Im Gespräch mit der Kunsthistorikerin Petra Lindqvist."],
  ["SO 08.12. · 11–14 UHR", "Werkstatt für Kinder", "Farbe und Raum — eigenes Gestalten für Kinder von 6 bis 10 Jahren."],
  ["JEDEN 1. MITTWOCH", "Offenes Atelier für Jugendliche", "Freies Arbeiten mit Materialien des Vereins, kostenfrei."],
];

function Index() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="topbar">
        <div className="page-width flex items-center justify-between gap-6 py-4">
          <a href="#top" className="brand"><span className="brand-mark">L</span><span>LICHTUNG</span></a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
            <a href="#ausstellungen">Ausstellungen</a><a href="#kuenstler">Künstler:innen</a>
            <a href="#programm">Programm</a><a href="#verein">Verein</a><a href="#besuch">Besuch</a>
          </nav>
          <a href="#mitgliedschaft" className="button button-dark">Mitglied werden</a>
        </div>
      </header>

      <section id="top" className="page-width scroll-mt-24 pt-12 pb-24 md:pt-16">
        <div className="hero-stack">
          <div className="hero-layer hero-layer-one" /><div className="hero-layer hero-layer-two" />
          <div className="glass-panel relative overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
                <div className="eyebrow"><span /> Aktuell · bis 14. Dezember</div>
                <h1 className="mt-6 text-5xl leading-[.95] font-black sm:text-6xl lg:text-7xl">Ein Ort, der<br />sich <em>öffnet.</em></h1>
                <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-ink-muted">Zeitgenössische Kunst, gezeigt und vermittelt von einem gemeinnützigen Verein — getragen von seinen Mitgliedern, offen für alle.</p>
                <div className="mt-8 flex flex-wrap gap-3"><a className="button button-dark" href="#ausstellungen">Ausstellungen ansehen</a><a className="button button-light" href="#programm">Programm entdecken</a></div>
                <div className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-line pt-5 font-display">
                  <div><strong>1978</strong><small>gegründet</small></div><div><strong>340</strong><small>Mitglieder</small></div><div><strong>4</strong><small>Schauen / Jahr</small></div>
                </div>
              </div>
              <div className="relative min-h-[420px] p-5 sm:p-7">
                <img src={installation} alt="Lichtinstallation mit transparenten Farbflächen in einer Galerie" className="h-full w-full rounded-hero object-cover" width={1008} height={1200} />
                <div className="image-label"><span>Aktuelle Ausstellung</span><strong>Stille Verschiebung</strong><small>Nora Vahle · Malerei und Raum</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ausstellungen" className="page-width scroll-mt-24 pb-24">
        <SectionTitle kicker="Jetzt & bald" title="Ausstellungen" text="Drei bis vier Ausstellungen im Jahr — von der Einzelpräsentation bis zur Gruppenschau." />
        <div className="grid gap-5 md:grid-cols-3">
          {exhibitions.map((item, i) => <article className="glass-card exhibition-card group" key={item.title}>
            <div className={`artwork artwork-${i + 1} ${item.tone}`}><span>{String(i + 1).padStart(2, "0")}</span></div>
            <div className="p-6"><div className="kicker">{item.date}</div><h3>{item.title}</h3><p>{item.meta}</p></div>
          </article>)}
        </div>
        <a href="#kontakt" className="mt-6 inline-block font-display text-sm font-bold text-cobalt">32 vergangene Ausstellungen im Archiv →</a>
      </section>

      <section id="kuenstler" className="page-width scroll-mt-24 pb-24">
        <SectionTitle kicker="Künstler:innen & Werke" title="Wer hier zuletzt gezeigt hat" />
        <div className="grid gap-5 md:grid-cols-3">
          {artists.map((artist) => <article className="glass-card artist-card" key={artist.name}>
            <img src={artist.image} alt={artist.alt} loading="lazy" width={816} height={816} />
            <div className="p-5"><h3>{artist.name}</h3><p>{artist.role}</p></div>
          </article>)}
        </div>
      </section>

      <section id="programm" className="page-width scroll-mt-24 pb-24">
        <div className="glass-panel p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><div className="kicker text-ochre">Vermittlung & Programm</div><h2 className="section-heading">Kunst begreifen — mit Augen, Händen und Neugier.</h2><p className="mt-5 font-serif text-lg text-ink-muted">Führungen, Gespräche und offene Werkstätten für alle Altersstufen.</p></div>
            <div className="divide-y divide-line border-t border-line">
              {events.map(([date, title, text]) => <article className="event-row" key={title}><time>{date}</time><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">↗</span></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="verein" className="page-width scroll-mt-24 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div><SectionTitle kicker="Verein & über uns" title="Getragen von seinen Mitgliedern" /><p className="max-w-2xl font-serif text-lg leading-relaxed text-ink-muted">Der Kunstverein Lichtung wurde 1978 gegründet und ist heute ein gemeinnütziger Verein mit rund 340 Mitgliedern. Wir zeigen zeitgenössische Positionen, vermitteln Kunst an ein breites Publikum und fördern den Austausch zwischen Künstler:innen und Region.</p></div>
          <div className="glass-card grid grid-cols-2 gap-px overflow-hidden p-2"><Stat value="48" label="Jahre Lichtung" /><Stat value="340" label="Mitglieder" /><Stat value="32" label="Ausstellungen im Archiv" /><Stat value="100%" label="gemeinnützig" /></div>
        </div>
      </section>

      <section id="mitgliedschaft" className="page-width scroll-mt-24 pb-24">
        <div className="text-center"><SectionTitle kicker="Mitmachen" title="Werden Sie Teil des Vereins" centered /></div>
        <div className="grid gap-5 md:grid-cols-3">
          <Tier name="Einzelmitglied" price="45 €" benefits={["Freier Eintritt", "Einladung zu Eröffnungen", "Vereinsmagazin"]} />
          <Tier name="Fördermitglied" price="120 €" benefits={["Alle Mitgliedsvorteile", "Vorkaufsrecht Jahresgabe", "Führung nach Wunschtermin"]} featured />
          <Tier name="Firmenmitglied" price="350 €" benefits={["Nennung in Katalogen", "Freikarten für Mitarbeitende", "Jährliches Firmenevent"]} />
        </div>
      </section>

      <section id="besuch" className="page-width scroll-mt-24 pb-24">
        <div className="glass-panel grid gap-10 p-7 sm:p-12 lg:grid-cols-2">
          <div><div className="kicker text-cobalt">Besuch & Service</div><h2 className="section-heading">Wir freuen uns auf Ihren Besuch.</h2><address className="mt-6 font-serif text-lg not-italic text-ink-muted">Kunstverein Lichtung e. V.<br />Sandwiese 12<br />30169 Hannover</address><a className="button button-dark mt-7" href="#kontakt">Route planen</a></div>
          <div className="visit-list"><p><strong>Dienstag – Freitag</strong><span>14 – 18 Uhr</span></p><p><strong>Samstag – Sonntag</strong><span>11 – 17 Uhr</span></p><p><strong>Montag</strong><span>geschlossen</span></p><p><strong>Eintritt</strong><span>6 € · ermäßigt 4 €</span></p><small>Stufenloser Zugang über den Hofeingang. Assistenzhunde sind willkommen.</small></div>
        </div>
      </section>

      <section id="kontakt" className="page-width scroll-mt-24 pb-24">
        <div className="glass-panel grid gap-10 p-7 sm:p-12 lg:grid-cols-2">
          <div><div className="kicker text-vermilion">Bleiben Sie verbunden</div><h2 className="section-heading">Post aus der Lichtung.</h2><p className="mt-4 font-serif text-lg text-ink-muted">Ausstellungseröffnungen und Programm, etwa einmal im Monat.</p><form className="mt-7 flex gap-2" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="newsletter">E-Mail-Adresse</label><input id="newsletter" type="email" placeholder="ihre@email.de" /><button type="submit" className="button button-dark">Anmelden</button></form></div>
          <div className="grid gap-4 sm:grid-cols-2"><Info title="Kontakt">info@kunstverein-lichtung.de</Info><Info title="Presse">Petra Lindqvist<br />Pressemappe anfragen</Info><Info title="Jahresgabe 2026">Limitierte Edition von Nora Vahle</Info><Info title="Instagram">@kunstvereinlichtung</Info></div>
        </div>
      </section>

      <footer><div className="page-width flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center"><div className="brand"><span className="brand-mark">L</span><span>LICHTUNG</span></div><p>© 2026 · Impressum · Datenschutz · Instagram</p></div></footer>
    </main>
  );
}

function SectionTitle({ kicker, title, text, centered = false }: { kicker: string; title: string; text?: string; centered?: boolean }) {
  return <div className={`mb-9 ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}><div className="kicker text-vermilion">{kicker}</div><h2 className="section-heading">{title}</h2>{text && <p className="mt-3 font-serif text-lg text-ink-muted">{text}</p>}</div>;
}
function Stat({ value, label }: { value: string; label: string }) { return <div className="stat"><strong>{value}</strong><span>{label}</span></div>; }
function Tier({ name, price, benefits, featured = false }: { name: string; price: string; benefits: string[]; featured?: boolean }) { return <article className={`tier glass-card ${featured ? "featured" : ""}`}>{featured && <span className="popular">Besonders beliebt</span>}<h3>{name}</h3><div className="price">{price}<small>/ Jahr</small></div><ul>{benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul><a href="#kontakt" className={`button ${featured ? "button-dark" : "button-light"}`}>Mitglied werden</a></article>; }
function Info({ title, children }: { title: string; children: React.ReactNode }) { return <div className="info"><strong>{title}</strong><p>{children}</p></div>; }