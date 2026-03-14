<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Movies</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="grain"></div>
    <div class="spotlight spotlight-left"></div>
    <div class="spotlight spotlight-right"></div>

    <main class="page-shell">
      <section class="hero">
        <div class="marquee marquee-top">
          <div class="marquee-track">
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

        <div class="hero-grid">
          <div class="copy">
            <p class="eyebrow">New transmission from the screen-lit underground</p>
            <h1>The Movies</h1>
            <p class="lede">
              A fever-dream band drifting between neon noir, motel pop, and the
              last song playing after the credits roll.
            </p>

            <div class="cta-row">
              <a class="button primary" href="#listen">Enter the haze</a>
              <a class="button secondary" href="#dates">See the next screening</a>
            </div>

            <dl class="facts">
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

          <div class="visual-stage" aria-hidden="true">
            <div class="orbital-rings"></div>
            <article class="poster poster-main">
              <p class="poster-kicker">Now showing</p>
              <h2>PHANTOM THEATER</h2>
              <p>New single humming through the dark.</p>
            </article>
            <article class="poster poster-side poster-left">
              <p>Late show</p>
              <strong>THE MOVIES</strong>
            </article>
            <article class="poster poster-side poster-right">
              <p>Broadcast 02</p>
              <strong>NO EXIT SONGS</strong>
            </article>
            <div class="pulse-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div class="marquee marquee-bottom">
          <div class="marquee-track reverse">
            <span>The screen never goes black</span>
            <span>The screen never goes black</span>
            <span>The screen never goes black</span>
            <span>The screen never goes black</span>
          </div>
        </div>
      </section>

      <section class="panel panel-listen" id="listen">
        <div class="panel-heading">
          <p class="section-label">Listen</p>
          <h2>Three tracks leaked from somewhere behind the curtain.</h2>
        </div>

        <div class="track-grid">
          <button class="track-card is-active" type="button" data-track="Phantom Theater">
            <span class="track-index">01</span>
            <span class="track-title">Phantom Theater</span>
            <span class="track-meta">Smoke, synth, headlights</span>
          </button>
          <button class="track-card" type="button" data-track="No Exit Songs">
            <span class="track-index">02</span>
            <span class="track-title">No Exit Songs</span>
            <span class="track-meta">Pulse, glass, motel signs</span>
          </button>
          <button class="track-card" type="button" data-track="Silver Static">
            <span class="track-index">03</span>
            <span class="track-title">Silver Static</span>
            <span class="track-meta">Slow burn, tape hiss, moonlight</span>
          </button>
        </div>

        <p class="signal-readout">
          Selected transmission:
          <span id="signal-output">Phantom Theater</span>
        </p>
      </section>

      <section class="panel panel-dates" id="dates">
        <div class="panel-heading">
          <p class="section-label">Dates</p>
          <h2>Upcoming appearances, subject to weather and disappearances.</h2>
        </div>

        <div class="dates-list">
          <div class="date-row">
            <span>04.18</span>
            <strong>Los Angeles</strong>
            <em>The Velvet Exit</em>
          </div>
          <div class="date-row">
            <span>05.02</span>
            <strong>Chicago</strong>
            <em>Afterlight Hall</em>
          </div>
          <div class="date-row">
            <span>05.19</span>
            <strong>New York</strong>
            <em>Midnight Riviera</em>
          </div>
        </div>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
