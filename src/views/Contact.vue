<script setup>
import { ref } from 'vue'
import campusMap from '../assets/images/campus-map.png'

const name = ref('')
const email = ref('')
const message = ref('')
const feedback = ref('')

function submitDemoForm() {
  feedback.value = `Thank you, ${name.value.trim()}. Your demonstration message is ready, but it has not been sent.`
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Contact Us</p>
        <h1>Questions?<br /><em>Contacts Us.</em></h1>
        <p>For questions about programs, the College, or campus visits, get in touch with our staff.</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-info">
          <p class="eyebrow">Find the College</p>
          <h2 class="section-heading">Visit Central Philippine University.</h2>
          <p class="section-intro">The College of Computer Studies is part of Central Philippine University in located Jaro, Iloilo City, Philippines.</p>

          <div class="contact-detail">
            <span class="contact-icon" aria-hidden="true">⌖</span>
            <div><strong>Campus location</strong><p>Central Philippine University<br />Jaro, Iloilo City, Philippines</p></div>
          </div>
          <a class="contact-detail contact-detail--link" href="https://www.facebook.com/cSs.org/" target="_blank" rel="noreferrer">
            <span class="contact-icon" aria-hidden="true">f</span>
            <div><strong>CCS community on Facebook</strong><p>Open the official community group</p></div>
          </a>

          <a class="map-link" href="https://maps.app.goo.gl/ytoC7GVn1Sr7mFHLA" target="_blank" rel="noreferrer">
            <img class="map-image" :src="campusMap" alt="Map showing the campus location near Mary Thomas Hall, Barangay Road, and Acacia Drive" />
            <span>Open campus directions <b aria-hidden="true">↗</b></span>
          </a>
        </div>

        <div class="form-card">
          <p class="eyebrow">Send a message</p>
          <h2>Contact form</h2>
          <div class="demo-alert"><strong>Demonstration only.</strong> This form validates in your browser and does not transmit or store messages.</div>
          <form @submit.prevent="submitDemoForm">
            <label for="contact-name">Your name</label>
            <input id="contact-name" v-model="name" name="name" type="text" autocomplete="name" required minlength="2" />
            <label for="contact-email">Email address</label>
            <input id="contact-email" v-model="email" name="email" type="email" autocomplete="email" required />
            <label for="contact-message">How can we help?</label>
            <textarea id="contact-message" v-model="message" name="message" rows="5" required minlength="10"></textarea>
            <button class="button" type="submit">Preview demo submission <span aria-hidden="true">→</span></button>
            <p v-if="feedback" class="form-feedback" role="status">{{ feedback }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 70px 0 75px;
  background: #edf5f3;
}

.page-hero h1 {
  margin: 0;
  color: var(--navy);
  font-family: var(--serif);
  font-size: clamp(42px, 6vw, 66px);
  font-weight: 800;
  letter-spacing: -0.065em;
  line-height: 1.08;
}

.page-hero h1 em {
  color: var(--teal);
  font-style: normal;
}

.page-hero > .container > p:last-child {
  max-width: 580px;
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 0.88fr;
  gap: 85px;
  align-items: start;
}

.contact-info .section-intro {
  margin-bottom: 28px;
}

.contact-detail {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 13px;
  margin: 19px 0;
}

.contact-icon {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 50%;
  background: #eaf3f0;
  color: var(--teal);
  font-size: 15px;
  font-weight: 800;
}

.contact-detail strong {
  color: var(--navy);
  font-size: 12px;
}

.contact-detail p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.contact-detail--link:hover strong {
  color: var(--teal);
}

.map-link {
  position: relative;
  display: block;
  height: 180px;
  overflow: hidden;
  margin-top: 25px;
  border-radius: 4px;
  background: #e3eee8;
}

.map-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-link > span:last-child {
  position: absolute;
  z-index: 1;
  right: 12px;
  bottom: 12px;
  left: 12px;
  display: flex;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  padding: 0 13px;
  border-radius: 3px;
  background: #fff;
  color: var(--navy);
  font-size: 13px;
  font-weight: 800;
}

.map-link span b {
  color: var(--teal);
  font-size: 15px;
}

.form-card {
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 14px 42px rgb(16 45 64 / 6%);
}

.form-card h2 {
  margin: 0 0 17px;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 28px;
  letter-spacing: -0.04em;
}

.demo-alert {
  margin-bottom: 20px;
  padding: 12px;
  border-left: 3px solid var(--gold);
  background: #fff9ed;
  color: #6f6857;
  font-size: 12px;
  line-height: 1.6;
}

.demo-alert strong {
  color: #59481f;
}

form {
  display: grid;
  gap: 9px;
}

label {
  margin-top: 5px;
  color: var(--navy);
  font-size: 13px;
  font-weight: 800;
}

input,
textarea {
  width: 100%;
  border: 1px solid #dce6e4;
  border-radius: 3px;
  background: #fbfdfc;
  color: var(--navy);
  font-size: 13px;
}

input {
  height: 42px;
  padding: 0 11px;
}

textarea {
  min-height: 120px;
  padding: 11px;
  resize: vertical;
}

form .button {
  justify-self: start;
  margin-top: 9px;
}

.form-feedback {
  margin: 4px 0 0;
  padding: 12px;
  border-radius: 3px;
  background: #edf7f1;
  color: #276545;
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }
}

@media (max-width: 420px) {
  .form-card {
    padding: 22px;
  }
}
</style>
