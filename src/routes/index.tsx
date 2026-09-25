import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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

type EventCategory = "Führung" | "Gespräch" | "Werkstatt" | "Offenes Atelier";

type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  imageAlt: string;
  category: EventCategory;
};

const events: CalendarEvent[] = [
  { id: "fuehrung-stille-verschiebung", title: "Kuratorenführung", date: "2026-11-21", time: "SA · 15 UHR", description: "Rundgang durch „Stille Verschiebung“ mit Jens Ohlendorf.", image: installation, imageAlt: "Lichtinstallation mit transparenten Farbflächen in einer Galerie", category: "Führung" },
  { id: "offenes-atelier-jugend", title: "Offenes Atelier für Jugendliche", date: "2026-12-02", time: "JEDEN 1. MITTWOCH", description: "Freies Arbeiten mit Materialien des Vereins, kostenfrei.", image: tomas, imageAlt: "Fotograf Tomas Berge in seinem Atelier", category: "Offenes Atelier" },
  { id: "gespraech-nora-vahle", title: "Künstlergespräch mit Nora Vahle", date: "2026-12-05", time: "SA · 19 UHR", description: "Im Gespräch mit der Kunsthistorikerin Petra Lindqvist.", image: nora, imageAlt: "Künstlerin Nora Vahle in ihrem Atelier", category: "Gespräch" },
  { id: "werkstatt-kinder", title: "Werkstatt für Kinder", date: "2026-12-13", time: "SO · 11–14 UHR", description: "Farbe und Raum — eigenes Gestalten für Kinder von 6 bis 10 Jahren.", image: tomas, imageAlt: "Fotograf Tomas Berge bei der Arbeit im Atelier", category: "Werkstatt" },
  { id: "finissage-stille-verschiebung", title: "Finissage „Stille Verschiebung“", date: "2026-12-19", time: "SA · 15 UHR", description: "Letzter Tag der Ausstellung — Abschlussrunde mit Nora Vahle.", image: installation, imageAlt: "Galerieinstallation mit farbigen Lichtflächen", category: "Führung" },
  { id: "druckwerkstatt-erwachsene", title: "Druckwerkstatt für Erwachsene", date: "2027-01-16", time: "SA · 11 UHR", description: "Radierung und Monotypie — Einführung mit Ines Kral.", image: ines, imageAlt: "Künstlerin Ines Kral mit einer Druckgrafik", category: "Werkstatt" },
];

const slides = [
  { image: installation, alt: "Lichtinstallation mit transparenten Farbflächen in einer Galerie", type: "Aktuelle Ausstellung", date: "bis 14. Dezember", title: "Stille Verschiebung", detail: "Nora Vahle · Malerei und Raum", href: "#ausstellungen" },
  { image: nora, alt: "Künstlerin Nora Vahle in ihrem Atelier", type: "Künstlergespräch", date: "5. Dezember · 19 Uhr", title: "Im Gespräch mit Nora Vahle", detail: "Moderation: Petra Lindqvist", href: "#veranstaltungen" },
  { image: tomas, alt: "Fotograf Tomas Berge in seinem Atelier", type: "Nächste Ausstellung", date: "18. Januar – 2. März", title: "Nachbilder", detail: "Tomas Berge & Ines Kral · Fotografie", href: "#ausstellungen" },
];

function Index() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="topbar">
        <div className="page-width flex items-center justify-between gap-4 py-3.5">
          <a href="#top" className="brand"><span className="brand-mark">L</span><span>LICHTUNG</span></a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
            <a href="#ausstellungen">Ausstellungen</a><a href="#kuenstler">Künstler:innen</a>
             <a href="#veranstaltungen">Veranstaltungen</a><a href="#verein">Verein</a><a href="#besuch">Besuch</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <a href="tel:+495110000000" className="topbar-link hidden items-center gap-1.5 xl:inline-flex"><Phone size={13} aria-hidden="true" />+49 511 000 00-0</a>
            <a href="mailto:info@kunstverein-lichtung.de" className="topbar-link hidden items-center gap-1.5 lg:inline-flex"><Mail size={13} aria-hidden="true" /><span className="hidden 2xl:inline">info@kunstverein-lichtung.de</span><span className="2xl:hidden">E-Mail</span></a>
            <span className="topbar-divider hidden lg:block" aria-hidden="true" />
            <a href="https://instagram.com/kunstvereinlichtung" className="social-dot" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={13} /></a>
            <a href="https://facebook.com/kunstvereinlichtung" className="social-dot" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={13} /></a>
            <a href="#mitgliedschaft" className="button button-dark shrink-0">Mitglied werden</a>
          </div>
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
                 <div className="mt-8 flex flex-wrap gap-3"><a className="button button-dark" href="#ausstellungen">Ausstellungen ansehen</a><a className="button button-light" href="#veranstaltungen">Veranstaltungen entdecken</a></div>
                <div className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-line pt-5 font-display">
                   <div><strong>1978</strong><small>gegründet</small></div><div><strong>340</strong><small>Mitglieder</small></div><div><strong>4</strong><small>Ausstellungen / Jahr</small></div>
                </div>
              </div>
               <HeroCarousel />
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

       <EventsSection />

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
          <div><div className="kicker text-vermilion">Bleiben Sie verbunden</div><h2 className="section-heading">Post aus der Lichtung.</h2><p className="mt-4 font-serif text-lg text-ink-muted">Ausstellungseröffnungen und Programm — tragen Sie Ihre Kontaktdaten ein, wir melden uns etwa einmal im Monat.</p><ContactForm /></div>
          <div className="grid gap-4 sm:grid-cols-2"><Info title="Kontakt">info@kunstverein-lichtung.de</Info><Info title="Presse">Petra Lindqvist<br />Pressemappe anfragen</Info><Info title="Jahresgabe 2026">Limitierte Edition von Nora Vahle</Info><Info title="Instagram">@kunstvereinlichtung</Info></div>
        </div>
      </section>

      <footer>
        <div className="page-width py-16">
          <div className="footer-connect">
            <div className="connect-column">
              <a className="connect-card" href="mailto:info@kunstverein-lichtung.de">
                <span className="connect-icon connect-vermilion"><Mail size={24} aria-hidden="true" /></span>
                <span className="connect-text"><small>E-Mail schreiben</small><strong>info@kunstverein-lichtung.de</strong></span>
                <ArrowUpRight className="connect-arrow" aria-hidden="true" />
              </a>
              <a className="connect-card" href="tel:+495110000000">
                <span className="connect-icon connect-cobalt"><Phone size={24} aria-hidden="true" /></span>
                <span className="connect-text"><small>Anrufen</small><strong>+49 511 000 00-0</strong></span>
                <ArrowUpRight className="connect-arrow" aria-hidden="true" />
              </a>
            </div>
            <div className="connect-location">
              <a className="connect-card" href="#besuch">
                <span className="connect-icon connect-ochre"><MapPin size={24} aria-hidden="true" /></span>
                <span className="connect-text"><small>Besuch & Adresse</small><strong>Kunstverein Lichtung e. V. · Sandwiese 12, 30169 Hannover</strong></span>
                <ArrowUpRight className="connect-arrow" aria-hidden="true" />
              </a>
              <div className="map-frame">
                <iframe
                  title="Karte: Kunstverein Lichtung, Sandwiese 12, 30169 Hannover"
                  src="https://maps.google.com/maps?q=Sandwiese%2012%2C%2030169%20Hannover&z=15&hl=de&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="footer-grid">
            <div>
              <div className="brand"><span className="brand-mark">L</span><span>LICHTUNG</span></div>
              <p className="footer-blurb">Zeitgenössische Kunst in der Region Hannover — gezeigt und vermittelt von einem gemeinnützigen Verein, getragen von seinen Mitgliedern.</p>
              <div className="footer-social">
                <a href="https://instagram.com/kunstvereinlichtung" className="social-dot social-cobalt" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={17} /></a>
                <a href="https://facebook.com/kunstvereinlichtung" className="social-dot social-cobalt" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={17} /></a>
                <a href="mailto:info@kunstverein-lichtung.de" className="social-dot social-vermilion" aria-label="E-Mail schreiben"><Mail size={17} /></a>
              </div>
            </div>
            <div className="footer-block">
              <strong>Besuch & Kontakt</strong>
              <p>Kunstverein Lichtung e. V.<br />Sandwiese 12 · 30169 Hannover</p>
              <p><a href="tel:+495110000000" className="footer-link">+49 511 000 00-0</a><br /><a href="mailto:info@kunstverein-lichtung.de" className="footer-link">info@kunstverein-lichtung.de</a></p>
            </div>
            <div className="footer-block">
              <strong>Öffnungszeiten</strong>
              <p>Di–Fr 14–18 Uhr<br />Sa–So 11–17 Uhr<br />Montags geschlossen</p>
            </div>
          </div>
          <div className="footer-legal"><p>© 2026 Kunstverein Lichtung e. V.</p><p>Impressum · Datenschutz</p></div>
        </div>
      </footer>
    </main>
  );
}

function eventDateParts(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  return {
    day: parsed.getDate(),
    month: Intl.DateTimeFormat("de-DE", { month: "short" }).format(parsed).replace(".", "").toUpperCase(),
  };
}

function EventsSection() {
  const [filter, setFilter] = useState<string>("Alle");
  const categories = Array.from(new Set(events.map((event) => event.category)));
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const visible = filter === "Alle" ? sorted : sorted.filter((event) => event.category === filter);

  return (
    <section id="veranstaltungen" className="events-band scroll-mt-24">
      <div className="page-width py-20 md:py-24">
        <div className="events-intro">
          <SectionTitle kicker="Kalender" title="Veranstaltungen" text="Begegnen, fragen, ausprobieren: Führungen, Gespräche und offene Werkstätten für alle Altersstufen." />
          <a href="#kontakt" className="button button-light">Alle Termine erhalten</a>
        </div>
        <div className="event-filters" role="group" aria-label="Veranstaltungen nach Kategorie filtern">
          {["Alle", ...categories].map((category) => (
            <button key={category} type="button" className="event-chip" aria-pressed={filter === category} onClick={() => setFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="events-grid" aria-live="polite">
          {visible.map((event) => {
            const { day, month } = eventDateParts(event.date);
            return (
              <article className="event-card" key={event.id}>
                <div className="event-date"><strong>{day}</strong><span>{month}</span></div>
                <div className="event-content">
                  <div className="event-meta"><span>{event.category}</span><time dateTime={event.date}>{event.time}</time></div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <div className="event-media">
                  <img src={event.image} alt={event.imageAlt} loading="lazy" width={480} height={360} />
                  <span className="event-arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const show = (index: number) => setActive((index + slides.length) % slides.length);

  return <div
    className="hero-carousel"
    role="region"
    aria-roledescription="Karussell"
    aria-label="Aktuelle Ausstellungen und Veranstaltungen"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)}
    onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
    }}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft") show(active - 1);
      if (event.key === "ArrowRight") show(active + 1);
    }}
  >
    <div className="carousel-viewport" aria-live="polite">
      <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => <article className="carousel-slide" key={slide.title} aria-hidden={index !== active}>
          <img src={slide.image} alt={slide.alt} width={1008} height={1200} />
          <a className="image-label" href={slide.href} tabIndex={index === active ? 0 : -1}><span>{slide.type} · {slide.date}</span><strong>{slide.title}</strong><small>{slide.detail}</small></a>
        </article>)}
      </div>
    </div>
    <div className="carousel-controls">
      <Button type="button" size="icon" variant="outline" className="carousel-arrow" aria-label="Vorheriges Bild" onClick={() => show(active - 1)}><ArrowLeft /></Button>
      <div className="carousel-dots" role="group" aria-label="Bild auswählen">
        {slides.map((slide, index) => <Button type="button" variant="ghost" className={`carousel-dot ${active === index ? "is-active" : ""}`} aria-label={`${slide.title} anzeigen`} aria-current={active === index ? "true" : undefined} onClick={() => show(index)} key={slide.title}><span /></Button>)}
      </div>
      <Button type="button" size="icon" variant="outline" className="carousel-arrow" aria-label="Nächstes Bild" onClick={() => show(active + 1)}><ArrowRight /></Button>
    </div>
    <span className="carousel-count" aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
  </div>;
}

function SectionTitle({ kicker, title, text, centered = false }: { kicker: string; title: string; text?: string; centered?: boolean }) {
  return <div className={`mb-9 ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}><div className="kicker text-vermilion">{kicker}</div><h2 className="section-heading">{title}</h2>{text && <p className="mt-3 font-serif text-lg text-ink-muted">{text}</p>}</div>;
}
function Stat({ value, label }: { value: string; label: string }) { return <div className="stat"><strong>{value}</strong><span>{label}</span></div>; }
function Tier({ name, price, benefits, featured = false }: { name: string; price: string; benefits: string[]; featured?: boolean }) { return <article className={`tier glass-card ${featured ? "featured" : ""}`}>{featured && <span className="popular">Besonders beliebt</span>}<h3>{name}</h3><div className="price">{price}<small>/ Jahr</small></div><ul>{benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul><a href="#kontakt" className={`button ${featured ? "button-dark" : "button-light"}`}>Mitglied werden</a></article>; }
function Info({ title, children }: { title: string; children: React.ReactNode }) { return <div className="info"><strong>{title}</strong><p>{children}</p></div>; }

type ContactValues = { firstName: string; lastName: string; phone: string; email: string };
type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const phonePattern = /^\+?[0-9 ()\/-]{6,20}$/;

function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Bitte Vorname angeben.";
  if (!values.lastName.trim()) errors.lastName = "Bitte Nachname angeben.";
  if (!values.phone.trim()) errors.phone = "Bitte Telefonnummer angeben.";
  else if (!phonePattern.test(values.phone.trim())) errors.phone = "Bitte eine gültige Telefonnummer angeben.";
  if (!values.email.trim()) errors.email = "Bitte E-Mail-Adresse angeben.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Bitte eine gültige E-Mail-Adresse angeben.";
  return errors;
}

function ContactForm() {
  const [values, setValues] = useState<ContactValues>({ firstName: "", lastName: "", phone: "", email: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const setField = (field: keyof ContactValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <strong>Vielen Dank, {values.firstName.trim()}!</strong>
        <p>Ihre Angaben sind eingegangen — wir melden uns mit dem nächsten Programm.</p>
        <button type="button" className="button button-light" onClick={() => { setValues({ firstName: "", lastName: "", phone: "", email: "" }); setErrors({}); setSent(false); }}>
          Weitere Anmeldung
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <ContactField id="first-name" label="Vorname" type="text" autoComplete="given-name" placeholder="Vorname" value={values.firstName} onChange={setField("firstName")} error={errors.firstName} />
        <ContactField id="last-name" label="Nachname" type="text" autoComplete="family-name" placeholder="Nachname" value={values.lastName} onChange={setField("lastName")} error={errors.lastName} />
      </div>
      <div className="field-row">
        <ContactField id="phone" label="Telefonnummer" type="tel" autoComplete="tel" placeholder="+49 511 000 00-0" value={values.phone} onChange={setField("phone")} error={errors.phone} />
        <ContactField id="email" label="E-Mail-Adresse" type="email" autoComplete="email" placeholder="ihre@email.de" value={values.email} onChange={setField("email")} error={errors.email} />
      </div>
      <div className="field-submit">
        <button type="submit" className="button button-dark">Anmelden</button>
        <small>Wir verwenden Ihre Daten ausschließlich für den Vereins-Newsletter.</small>
      </div>
    </form>
  );
}

function ContactField({ id, label, type, value, onChange, error, placeholder, autoComplete }: {
  id: string; label: string; type: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; error: string | undefined; placeholder: string; autoComplete: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} required className={error ? "invalid" : undefined} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : undefined} />
      {error && <p className="error-text" id={`${id}-error`}>{error}</p>}
    </div>
  );
}