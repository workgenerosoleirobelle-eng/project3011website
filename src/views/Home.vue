<script setup>
import { RouterLink } from 'vue-router'
import { programs } from '../data/programs'
import heroVideo from '../assets/images/homevid.mp4'
import teamworkImage from '../assets/images/home2.jpg'

const programList = Object.values(programs)
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <span><p class="eyebrow">Central Philippine University</p>    <p class="eyebrow"></p></span>
          <h1>Imagine what<br />you can <em>make</em><br />with technology.</h1>
          <p class="hero__intro">Discover a community where computing, creativity, and information come together to shape a better-connected world.</p>
          <div class="hero__actions">
            <a class="text-link" href="#programs">Explore our programs <span aria-hidden="true">↓</span></a>
            <RouterLink class="hero__secondary" to="/about">Get to know CCS <span aria-hidden="true">↗</span></RouterLink>
          </div>
          <div class="hero__note"> Innovation Starts with Understanding.</div>
        </div>
        <div class="hero__photo">
          <video :src="heroVideo" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback aria-hidden="true"></video>
          <span class="hero__vertical"> INNOVATION . QUALITY EDUCATION</span>
        </div>
      </div>
    </section>

    <section id="programs" class="section">
      <div class="container">
        <div class="section-top">
          <div>
            <p class="eyebrow">Find your path</p>
            <h2 class="section-heading">Four ways to explore<br />the digital world.</h2>
          </div>
          <div class="section-top__aside">
            <p>From building software and networks to designing interactive experiences and connecting people with information.</p>
          </div>
        </div>

        <div class="card-grid">
          <article v-for="program in programList" :key="program.slug" class="program-card">
            <RouterLink :to="`/programs/${program.slug}`" :aria-label="`Explore ${program.fullName}`">
              <div class="program-card__image">
                <img :src="program.image" :alt="program.imageAlt" loading="lazy" />
                <span class="program-card__code">{{ program.acronym }}</span>
              </div>
              <div class="program-card__body">
                <h3>{{ program.fullName }}</h3>
                <p>{{ program.tagline }}</p>
                <span class="text-link">Discover this program <span aria-hidden="true">→</span></span>
              </div>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <section class="feature-section">
      <div class="container feature-section__grid">
        <div class="feature-image">
          <img :src="teamworkImage" alt="A team collaborating on a digital project" loading="lazy" />
          <span>COLLABORATE · BUILD · SHARE</span>
        </div>
        <div class="feature-copy">
          <p class="eyebrow">The CCS experience</p>
          <h2 class="section-heading">Technology is better when it brings people together.</h2>
          <p>At the College of Computer Studies, students engage with computing, creative media, and information work grounded in the College's commitment to academic excellence and the needs of the total person and the world.</p>
          <RouterLink class="button" to="/about">About the College <span aria-hidden="true">→</span></RouterLink>
        </div>
      </div>
    </section>

    <section class="section news-section">
      <div class="container news-section__inner">
        <div>
          <p class="eyebrow">From the College</p>
          <h2 class="section-heading">News, events &amp;<br />community updates.</h2>
          <p class="section-intro">Browse archived news and community updates from the College.</p>
          <RouterLink class="text-link" to="/news">See all updates <span aria-hidden="true">→</span></RouterLink>
        </div>
        <div class="news-preview">
          <span class="news-preview__date">08 <small>DEC<br />2021</small></span>
          <div><span class="news-label">Community engagement</span><h3>Community Engagement MOA Signing Ceremony</h3></div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container cta__inner">
        <div><p class="eyebrow">Your next chapter starts here</p><h2>Curious about where you fit?</h2><p>Reach out to the College.</p></div>
        <RouterLink class="button button--outline" to="/contact">Contact CCS <span aria-hidden="true">→</span></RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  overflow: hidden;
  background: #f4f8f6;
}

.hero__grid {
  display: grid;
  min-height: 555px;
  grid-template-columns: 0.97fr 1.03fr;
  align-items: center;
  gap: 55px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.hero__copy {
  padding: 10px 0;
}

.hero h1 {
  margin: 0;
  color: var(--navy);
  font-family: var(--serif);
  font-size: clamp(47px, 6vw, 74px);
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 1.02;
}

.hero h1 em {
  color: var(--teal);
  font-style: normal;
}

.hero__intro {
  max-width: 430px;
  margin: 23px 0;
  color: #61747c;
  font-size: 15px;
  line-height: 1.8;
}

.hero__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.hero__secondary {
  color: var(--navy);
  font-size: 12px;
  font-weight: 800;
}

.hero__secondary:hover {
  color: var(--teal);
}

.hero__note {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 40px;
  color: #76868b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.hero__note span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
}

.hero__photo {
  position: relative;
  height: 420px;
  margin-right: 15px;
}

.hero__photo > video {
  width: 100%;
  height: 100%;
  border-radius: 7px 100px 7px 7px;
  object-fit: cover;
  pointer-events: none;
}

.hero__photo::after {
  position: absolute;
  inset: 45% 0 0;
  border-radius: 0 0 7px 7px;
  background: linear-gradient(transparent, rgb(9 30 40 / 35%));
  content: '';
  pointer-events: none;
}

.photo-card {
  position: absolute;
  z-index: 1;
  right: -22px;
  bottom: 27px;
  display: flex;
  min-width: 265px;
  align-items: center;
  gap: 13px;
  padding: 15px;
  border: 1px solid #e3ece9;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 15px 35px rgb(16 45 64 / 12%);
}

.photo-card__mark {
  display: grid;
  width: 39px;
  height: 39px;
  place-items: center;
  border-radius: 50%;
  background: var(--navy);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
}

.photo-card > span:nth-child(2) {
  display: grid;
  flex: 1;
  gap: 4px;
}

.photo-card strong {
  color: var(--navy);
  font-size: 13px;
}

.photo-card small {
  color: var(--muted);
  font-size: 11px;
}

.photo-card > a {
  color: var(--teal);
  font-size: 17px;
}

.hero__vertical {
  position: absolute;
  right: -33px;
  bottom: 18px;
  color: #72878c;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
}

.section-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 50px;
}

.section-top__aside {
  max-width: 350px;
}

.section-top__aside p {
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.feature-section {
  padding: 80px 0;
  background: #edf4f2;
}

.feature-section__grid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;
  gap: 90px;
}

.feature-image {
  position: relative;
  height: 350px;
}

.feature-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}

.feature-image span {
  position: absolute;
  right: -16px;
  bottom: 23px;
  padding: 10px 13px;
  border-radius: 2px;
  background: #fff;
  color: var(--teal);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.feature-copy > p:not(.eyebrow) {
  margin: 17px 0 24px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.85;
}

.news-section__inner {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: center;
  gap: 100px;
}

.news-section .section-intro {
  margin-bottom: 22px;
}

.news-preview {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 22px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: #fff;
}

.news-preview__date {
  display: flex;
  width: 60px;
  height: 67px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 3px solid var(--gold);
  background: var(--pale);
  color: var(--navy);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 800;
}

.news-preview__date small {
  margin-top: 2px;
  color: var(--muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  line-height: 1.1;
  text-align: center;
}

.news-label {
  color: var(--teal);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.news-preview h3 {
  margin: 10px 0 17px;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 20px;
  line-height: 1.4;
}

.cta {
  padding: 55px 0;
  background: var(--teal);
  color: #fff;
}

.cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.cta .eyebrow {
  color: #d8f0e8;
}

.cta h2 {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(25px, 3vw, 34px);
  letter-spacing: -0.04em;
}

.cta__inner > div > p:last-child {
  margin: 9px 0 0;
  color: #d1e6e3;
  font-size: 12px;
}

@media (max-width: 900px) {
  .hero__grid {
    gap: 30px;
  }

  .feature-section__grid,
  .news-section__inner {
    gap: 45px;
  }
}

@media (max-width: 700px) {
  .hero__grid,
  .feature-section__grid,
  .news-section__inner {
    grid-template-columns: 1fr;
  }

  .hero__grid {
    gap: 38px;
    padding-top: 48px;
    padding-bottom: 58px;
  }

  .hero__photo {
    height: 300px;
    margin-right: 15px;
  }

  .hero__vertical {
    right: -26px;
  }

  .section-top,
  .cta__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
  }

  .feature-section__grid,
  .news-section__inner {
    gap: 35px;
  }

  .feature-image {
    height: 250px;
    margin-right: 10px;
  }

  .feature-image span {
    right: -10px;
  }

  .news-preview {
    grid-template-columns: 55px 1fr;
    gap: 14px;
    padding: 20px;
  }

  .news-preview__date {
    width: 50px;
  }
}

@media (max-width: 420px) {
  .hero h1 {
    font-size: 46px;
  }

  .hero__actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 17px;
  }

  .photo-card {
    right: -7px;
    min-width: 235px;
  }
}
</style>
