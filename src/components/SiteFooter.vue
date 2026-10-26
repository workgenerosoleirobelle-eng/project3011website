<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-brand">
        <div class="brand-lockup">
          <span class="footer-mark">CPU</span>
          <div><strong>COLLEGE OF<br />COMPUTER STUDIES</strong><small>Central Philippine University</small></div>
        </div>
        <p>Learning, creating, and using technology to serve our communities and shape what comes next.</p>
      </div>
      <div class="footer-column">
        <h2>Explore</h2>
        <RouterLink to="/about">About CCS</RouterLink>
        <RouterLink to="/#programs">Academic programs</RouterLink>
        <RouterLink to="/faculty">Faculty &amp; staff</RouterLink>
        <RouterLink to="/news">News &amp; updates</RouterLink>
      </div>
      <div class="footer-column">
        <h2>Visit</h2>
        <p>Central Philippine University<br />Jaro, Iloilo City, Philippines</p>
        <a href="https://www.facebook.com/groups/cpuccs" target="_blank" rel="noreferrer">CCS on Facebook <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom__inner">
        <span>Central Philippine University · College of Computer Studies</span>
        <span>Academic information may change.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #0d2636;
  color: #b5c6cc;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 1fr;
  gap: 70px;
  padding-top: 54px;
  padding-bottom: 52px;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-mark {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: #fff;
  font-family: var(--serif);
  font-size: 12px;
  font-weight: 800;
}

.brand-lockup div {
  display: grid;
  gap: 4px;
}

.brand-lockup strong {
  color: #fff;
  font-family: var(--serif);
  font-size: 13px;
  letter-spacing: 0.05em;
  line-height: 1.3;
}

.brand-lockup small {
  color: #91a7af;
  font-size: 11px;
}

.footer-brand > p,
.footer-column p {
  max-width: 330px;
  margin: 17px 0 0;
  color: #91a7af;
  font-size: 12px;
  line-height: 1.8;
}

.footer-column {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 11px;
}

.footer-column h2 {
  margin: 0 0 5px;
  color: #fff;
  font-family: var(--serif);
  font-size: 14px;
}

.footer-column a,
.footer-column p {
  margin: 0;
  color: #91a7af;
  font-size: 12px;
  line-height: 1.75;
}

.footer-column a:hover {
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid rgb(255 255 255 / 10%);
}

.footer-bottom__inner {
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #718992;
  font-size: 12px;
}

@media (max-width: 700px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 35px 24px;
    padding-top: 42px;
    padding-bottom: 38px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom__inner {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 13px 0;
  }
}
</style>
