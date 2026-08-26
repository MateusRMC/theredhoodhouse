"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [strip, setStrip] = useState(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      setIsMenuOpen(false);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div className="nav-header">
        <div className="header-inner">
          <a className="brand-mark" href="/" aria-label="the redhood house home">
            <img src="/logo.svg" alt="the redhood house" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <img src="/menu.svg" alt="" aria-hidden="true" />
          </button>

          <nav
            id="site-nav"
            className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#events" onClick={closeMenu}>
              Events
            </a>
            <a href="#about" onClick={closeMenu}>
              The House
            </a>
            <a className="nav-cta" href="#tickets" onClick={closeMenu}>
              Tickets
            </a>
          </nav>
        </div>
      </div>
      <div className="hero">
        {/*<div className="featuredEvent">
          <div className="featuredEvent-imageWrapper">
            <img
              className="featuredEvent-poster"
              src="/featurePoster.jpg"
              alt="All aboard event poster"
            />
          </div>
          <div className="featuredEvent-params">
            <div className="featuredEvent-title">
              <h2>Red. </h2>
            </div>
            <small className="featuredEvent-details">
              July 31st • 6:00 PM • Bampot House • Toronto
            </small>

            <p className="featuredEvent-description">
              A debut of everything about the Redhood, a live performance night with outstanding
              hand-picked artists in Toronto.
            </p>

            <a
              href="https://www.zeffy.com/en-CA/ticketing/the-red-night"
              className="featuredEvent-button"
            >
              Get your tickets now!
            </a>
          </div>
        </div>*/}
        <video className="bg-video" autoPlay muted loop playsInline preload="auto" controls={false}>
          <source src="https://www.theredhoodhouse.com/website.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Welcome to the Redhood</h1>
          <a href="#events">Check our events</a>
        </div>
      </div>

      <div
        className="marquee-strip"
        aria-label="Brand statement"
        style={{ display: strip ? "flex" : "none" }}
      >
        <p>
          Announcement / Annoucement /Announcement / Annoucement /Announcement / Annoucement
          /Announcement / Annoucement /Announcement / Annoucement /Announcement / Annoucement
          /Announcement / Annoucement /
        </p>
      </div>
      <section id="events" className="events-section">
        <div className="section-heading">
          <p className="eyebrow">up next</p>
          <h2>All events</h2>
        </div>

        <div className="events-grid">
          <article className="event-card">
            <p className="event-date">July 31st, 2026</p>
            <h3>Red</h3>
            <p>
              A debut of everything about the Redhood, a live performance night with outstanding
              hand-picked artists in Toronto.
            </p>
            <a href="https://www.zeffy.com/en-CA/ticketing/the-red-night">Go to event</a>
          </article>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-heading">
          <h2>The House</h2>
        </div>
        <p>
          The Redhood House is an organization dedicated to strengthening Toronto’s performing arts
          community. We create live experiences, connect emerging and independent artists with
          audiences and collaborators, and promote local cultural projects that bring people
          together through art, expression, and community.
          <br />
          <br />
          Our main goal is to create a safe and emotional space for those who want to express
          themselves fully and freely. A place where people perform, experiment, connect with each
          other and celebrate expression in all its forms. <br />
          <br />
          The Redhood is the group of people who surrender, celebrating and embracing both their own
          and each other’s vulnerability.
        </p>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} The Redhood House. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:contact@theredhoodhouse.com">theredhoodhouse@gmail.com</a>

          <a
            className="social-link"
            href="https://www.instagram.com/theredhoodhouse"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src="/insta.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}
