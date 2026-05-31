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
            <a href="#featured" onClick={closeMenu}>
              Featured
            </a>
            <a href="#events" onClick={closeMenu}>
              Events
            </a>
            <a href="#about" onClick={closeMenu}>
              House
            </a>
            <a className="nav-cta" href="#tickets" onClick={closeMenu}>
              Tickets
            </a>
          </nav>
        </div>
      </div>
      <div className="hero">
        <div className="featuredEvent">
          <div className="featuredEvent-title">
            <h1>Mamma Mia! : All aboard</h1>
          </div>
          <div className="featuredPoster-wrapper">
            <img src="/featurePoster.jpg" />
          </div>
          <div className="featuredEvent-params">
            <p className="featuredEvent-details">
              July 13th • 6:00 PM • Sandy Empire Boat • Toronto
            </p>
            <p className="featuredEvent-description">
              Drinks, friends, and Mamma Mia songs on a Boat at sunset, do you need anything else?
            </p>
          </div>

          <button className="featuredEvent-button">Get your 15$ ticket</button>
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
          <h2>all events</h2>
        </div>

        <div className="events-grid">
          <article className="event-card">
            <p className="event-date">Oct 04</p>
            <h3>Night Cinema: Blood & Velvet</h3>
            <p>A curated screening night for cult images, soft horror and slow cinema.</p>
            <a href="mailto:hello@theredhoodhouse.com">Join list</a>
          </article>

          <article className="event-card">
            <p className="event-date">Oct 18</p>
            <h3>Listening Session 001</h3>
            <p>An intimate sound-first night with no stage, no phones and a long final track.</p>
            <a href="mailto:hello@theredhoodhouse.com">Join list</a>
          </article>

          <article className="event-card">
            <p className="event-date">Nov 02</p>
            <h3>House Performance Lab</h3>
            <p>New works, unfinished gestures and small-room performance pieces.</p>
            <a href="mailto:hello@theredhoodhouse.com">Join list</a>
          </article>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-heading">
          <p className="eyebrow">the house</p>
          <h2>Built like a room. Programmed like a film.</h2>
        </div>

        <p>
          the redhood house exists between theatre, cinema and a members-only salon. A place for
          artists, audiences and night people to gather around works that feel handmade, haunted and
          alive.
        </p>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} The Redhood House. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:contact@theredhoodhouse.com">contact@theredhoodhouse.com</a>

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
