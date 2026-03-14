"use client";

import { useState } from "react";

const tracks = [
  {
    id: "phantom-theater",
    index: "01",
    title: "Phantom Theater",
    meta: "Smoke, synth, headlights",
  },
  {
    id: "no-exit-songs",
    index: "02",
    title: "No Exit Songs",
    meta: "Pulse, glass, motel signs",
  },
  {
    id: "silver-static",
    index: "03",
    title: "Silver Static",
    meta: "Slow burn, tape hiss, moonlight",
  },
] as const;

const dates = [
  { date: "04.18", city: "Los Angeles", venue: "The Velvet Exit" },
  { date: "05.02", city: "Chicago", venue: "Afterlight Hall" },
  { date: "05.19", city: "New York", venue: "Midnight Riviera" },
] as const;

const mysteryMessages = [
  "The screen whispers secrets only the lost can hear.",
  "Between frames, the real story unfolds.",
  "Every shadow hides a spotlight waiting to ignite.",
  "The curtain falls, but the echo remains.",
  "In the dark, the light finds its voice.",
] as const;

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<(typeof tracks)[number]>(
    tracks[0],
  );
  const [mysteryMessage, setMysteryMessage] = useState<string>("");

  const revealMystery = () => {
    const randomIndex = Math.floor(Math.random() * mysteryMessages.length);
    setMysteryMessage(mysteryMessages[randomIndex]);
  };

  return (
    <main className="page-shell">
      <div className="grain" />
      <div className="spotlight spotlight-left" />
      <div className="spotlight spotlight-right" />

      <section className="hero">
        <div className="marquee marquee-top" aria-hidden="true">
          <div className="marquee-track">
            <span>Midnight previews</span>
            <span>Velvet feedback</span>
            <span>Static romance</span>
            <span>After-hours cinema</span>
            <span>Midnight previews</span>
            <span>Velvet feedback</span>
            <span>Static romance</span>
            <span>After-hours cinema</span>
          </div>
        </div>

        <div className="hero-grid">
          <div className="copy">
            <p className="eyebrow">
              New transmission from the screen-lit underground
            </p>
            <h1>The Movies</h1>
            <p className="lede">
              A fever-dream band drifting between neon noir, motel pop, and the
              last song playing after the credits roll.
            </p>

            <div className="cta-row">
              <a className="button primary" href="#listen">
                Enter the haze
              </a>
              <a className="button secondary" href="#dates">
                See the next screening
              </a>
            </div>

            <dl className="facts">
              <div>
                <dt>Latest signal</dt>
                <dd>Phantom Theater</dd>
              </div>
              <div>
                <dt>Next scene</dt>
                <dd>Los Angeles, 11:47 PM</dd>
              </div>
              <div>
                <dt>Mood</dt>
                <dd>Beautifully untraceable</dd>
              </div>
            </dl>
          </div>

          <div className="visual-stage" aria-hidden="true">
            <div className="orbital-rings" />
            <article className="poster poster-main">
              <p className="poster-kicker">Now showing</p>
              <h2>{selectedTrack.title.toUpperCase()}</h2>
              <p>{selectedTrack.meta}</p>
            </article>
            <article className="poster poster-side poster-left">
              <p>Late show</p>
              <strong>THE MOVIES</strong>
            </article>
            <article className="poster poster-side poster-right">
              <p>Broadcast 02</p>
              <strong>NO EXIT SONGS</strong>
            </article>
            <div className="pulse-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="marquee marquee-bottom" aria-hidden="true">
          <div className="marquee-track reverse">
            <span>The screen never goes black</span>
            <span>The screen never goes black</span>
            <span>The screen never goes black</span>
            <span>The screen never goes black</span>
          </div>
        </div>
      </section>

      <section className="panel panel-listen" id="listen">
        <div className="panel-heading">
          <p className="section-label">Listen</p>
          <h2>Three tracks leaked from somewhere behind the curtain.</h2>
        </div>

        <div className="track-grid">
          {tracks.map((track) => {
            const isActive = selectedTrack.id === track.id;

            return (
              <button
                key={track.id}
                className={`track-card${isActive ? " is-active" : ""}`}
                type="button"
                onClick={() => setSelectedTrack(track)}
              >
                <span className="track-index">{track.index}</span>
                <span className="track-title">{track.title}</span>
                <span className="track-meta">{track.meta}</span>
              </button>
            );
          })}
        </div>

        <p className="signal-readout">
          Selected transmission: <span id="signal-output">{selectedTrack.title}</span>
        </p>
      </section>

      <section className="panel panel-dates" id="dates">
        <div className="panel-heading">
          <p className="section-label">Dates</p>
          <h2>Upcoming appearances, subject to weather and disappearances.</h2>
        </div>

        <div className="dates-list">
          {dates.map((show) => (
            <div className="date-row" key={`${show.date}-${show.city}`}>
              <span>{show.date}</span>
              <strong>{show.city}</strong>
              <em>{show.venue}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="panel panel-mystery">
        <div className="panel-heading">
          <p className="section-label">Mystery</p>
          <h2>Decode the hidden signal.</h2>
        </div>

        <div className="cta-row">
          <button className="button primary" onClick={revealMystery}>
            Reveal Mystery
          </button>
        </div>

        {mysteryMessage && (
          <p className="lede" style={{ marginTop: "20px", fontStyle: "italic" }}>
            {mysteryMessage}
          </p>
        )}
      </section>
    </main>
  );
}
