<script setup>
import { ref } from 'vue'
import DeanImage from '../assets/images/dean.png'
import acerImage from '../assets/partners/acer.jpg'
import ciscoAcademyImage from '../assets/partners/Cisco_academy_logo.png'
import govSmartImage from '../assets/partners/govesmart.jpg'
import huaweiImage from '../assets/partners/huawei.jpg'
import lasorTechImage from '../assets/partners/LasorTech.jpg'
import mayaImage from '../assets/partners/mayad.png'
import oracleAcademyImage from '../assets/partners/Oracle_Academy_rgb.png'
import psiTeImage from '../assets/partners/PSiTE.png'

const partners = [
  { name: 'Acer Academy Philippines', image: acerImage, url: 'https://www.facebook.com/AcerAcademyPhils/' },
  { name: 'Cisco Academy', image: ciscoAcademyImage },
  { name: 'GovSmart', image: govSmartImage, url: 'https://govesmart.ph/' },
  { name: 'Huawei ICT Academy', image: huaweiImage, url: 'https://r.huaweistatic.com/s/gray/hwtalent/lst/ict-academy/#/home' },
  { name: 'LasorTech Enterprises', image: lasorTechImage, url: 'https://www.facebook.com/LasortechEnterprises/' },
  { name: 'Maya Studios', image: mayaImage, url: 'https://mayadstudios.com/about-us/' },
  { name: 'Oracle Academy', image: oracleAcademyImage, url: 'https://academy.oracle.com/en/oa-web-overview.html' },
  { name: 'PSiTE', image: psiTeImage, url: 'https://psite.org/' },
]

const historyMilestones = [
  { year: '1995', text: 'The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch of students was composed of two sections with about 100 students headed by Prof. Mary O’ T. Penetrante.' },
  { year: "'01–'02", text: 'During the first semester of AY 2001–2002, the Computer Science Department was transferred to the College of Engineering together with the newly offered Bachelor of Science in Software Engineering (BSSE) course. It was then called the Software Engineering and Computer Science (SE & CS) Department and was headed by Engr. Cirilo C. Calibjo, PEE. At the same time of the transfer, the Bachelor in Information Science and Management (BISM), which was the brainchild of Prof. Aquiles Sansing, was offered in the College of Commerce.' },
  { year: "'02–'03", text: 'At the end of school year AY 2002–2003, it was proposed that the BSCS program under the College of Engineering and the BSISM program under the College of Commerce, along with another new course, Bachelor of Science in Information Technology (BSIT), would be combined under one college. The university then approved the proposal and the College of Computer Studies began.' },
  { year: "'03–'04", paragraphs: [
    'In the first semester of AY 2003–2004, Engr. Cirilo C. Calibjo, Department Chair of the Department of SE & CS in the College of Engineering, became its first Dean. The new college was housed in the Mary Thomas Building.',
    'In April 2004, two new degree courses, Master in Computer Science (MCS) and Master of Science in Computer Science (MSCS), were approved to be offered.',
  ] },
  { year: "'06–'07", paragraphs: [
    'During the first semester of AY 2006–2007, Engr. Calibjo went to Manila to pursue his doctoral studies in Electrical Engineering at the University of the Philippines, Diliman. Prof. Rodney A. Gicana was appointed Officer-in-Charge during his absence. Prof. Gicana was previously the Department Head of the Software Engineering Department.',
    'As time progressed, many changes were made in the College, including its programs and facilities. After completing his doctoral degree, Dr. Calibjo returned to the College of Computer Studies as Dean.',
  ] },
  { year: '2011', text: 'In 2011, the College applied for PAASCU accreditation and had its preliminary visit. Improvements were made to enhance the facilities and raise the standards of education at the College.' },
  { year: '2014', text: 'In 2014, a PAASCU consultancy visit helped ensure that requirements were met before a formal visit. During this time, the Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) was established.' },
  { year: '2015', text: 'In March 2015, PAASCU conducted a formal visit. By June of the same year, the College of Computer Studies was granted Level 1 status for its BSCS, BSIT, and BSIS programs.' },
  { year: '2016', text: 'In June 2016, Prof. Rea P. Balontong was appointed Officer-in-Charge for the College of Computer Studies.' },
  { year: '2018', text: 'In June 2018, the Bachelor of Science in Library and Information Science migrated to the College of Computer Studies.' },
  { year: "'18–'19", text: 'At the beginning of academic year 2018–2019, Prof. Ma. Christina A. Quijano was appointed Officer-in-Charge for the College and was Acting Dean as of AY 2021–2022.' },
  { year: '2019', text: 'On September 16–18, 2019, a re-survey visit for Level 1 status for the BSCS, BSIT, and BSIS programs was made by the PAASCU Accreditation Team. After the visit, the College was granted a five-year Level 1 re-accredited status.' },
  { year: "'19–'20", paragraphs: [
    'The BLIS program underwent an orientation from the PACUCOA accrediting body in October 2019 and was scheduled to have its preliminary survey in early 2020.',
    'This was another milestone achieved by the College. With the many changes and improvements, there is more to it than what the eyes can see.',
    'More achievements and goals are yet to come, as CCS will make its mark in the history of Central Philippine University.',
  ] },
]

const selectedHistoryIndex = ref(0)
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">About the College</p>
        <h1>Computing with purpose.<br /><em>Learning for life.</em></h1>
        <p>Get to know the mission and vision of the Central Philippine University College of Computer Studies.</p>
        <nav class="section-nav" aria-label="About page sections">
          <a
            v-for="section in [
              { id: 'navigation-1', label: 'Mission & Vision' },
              { id: 'navigation-2', label: 'History' },
              { id: 'navigation-3', label: 'Quality Policy' },
              { id: 'navigation-4', label: 'Partners and Memberships' },
              { id: 'navigation-5', label: 'Message from the Dean' },
            ]"
            :key="section.id"
            :href="`#${section.id}`"
          >
            {{ section.label }}
          </a>
        </nav>
      </div>
    </section>

    <section id="navigation-5" class="section navigation-section">
      <div class="container about-grid">
        <div class="about-image">
          <img :src="DeanImage" alt="Image of Dean Quijano" />
          <span>CCS · Central Philippine University</span>
        </div>
        <div>
          <p class="eyebrow">A Message from the Dean</p>
          <h2 class="section-heading">Welcome to the College of Computer Studies</h2>
          <p class="section-intro">
            <p>In every school year for the College of Computer Studies, we look forward with great anticipation to the contributions the new class will make to campus life. In both the aspect of academic and non academic, each students is unique enough to achieve whatever they want to reach for in our college.</p>
            <p>The primary focus of CCS is teaching and learning. Our undergraduates are encouraged to think about their education as a whole, rather than just a term taken one thing at a time, and the different faculty members work with them not only during the start of the school year, but throughout the whole as well.</p>
            <p>Learning and growth with us does not always come in classroom and academic experiences. Other kinds of opportunities abound, not the least of them the daily occasions for friendship and fellowship with people from many different backgrounds and with a wide variety of interests. In addition, students participate in rich and varied extracurricular activities that the College and University has got to offer.</p>
            <p>As another year starts, a new challenge comes for each and everyone with us. Take this into your mind and hearts and be able to reach the dream that you have ever dreamt to succeed. Welcome dear students and have a great school year ahead of you.</p>
            <p align="right">Ma. Christina A. Quijano, MSCS</p>
            <p align="right">Dean</p>
          </p>
        
        </div>
      </div>
    </section>

    <section id="navigation-1" class="section section--soft">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">What Guides Us</p>
          <h2 class="section-heading">Mission &amp; Vision</h2>
        </div>
        <div class="statement-grid">

          <article class="statement-card ">
            <span>MISSION</span>
            <h3>Prepare students for careers and lifelong learning</h3>
            <blockquote>“A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.”</blockquote>
          </article>
          <article class="statement-card statement-card--dark">
            <span>VISION</span>
            <h3>Academic excellence in Information Technology Education</h3>
            <blockquote>“The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.”</blockquote>
          </article>
        </div>
      </div>
    </section>

    <section id="navigation-3" class="section navigation-section">
      <div class="container objectives">
        <div>
          <p class="eyebrow">What we strive for</p>
          <h2 class="section-heading">The College's Quality Policy</h2>
        </div>
        <div>
          <span class="section-intro">
            <p>To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.
            </p>
            <p> We maintain a quality management system that complies with international quality management system that complies with international quality standards. We continually improve to achieve global excellence that satisfies the expectations of the university community, partner institutions, and the general public.
            </p>
          </span>
        </div>
      </div>
    </section>

    <section id="navigation-2" class="section section--soft navigation-section">
      <div class="container">
        <p class="eyebrow">Our beginnings</p>
        <h2 class="section-heading">History</h2>
        <div class="history-timeline-scroll">
          <div class="history-timeline" role="group" aria-label="College history timeline">
            <button
              v-for="(milestone, index) in historyMilestones"
              :key="`${milestone.year}-${index}`"
              class="history-milestone"
              :class="{ 'history-milestone--active': selectedHistoryIndex === index }"
              type="button"
              :aria-pressed="selectedHistoryIndex === index"
              :aria-label="`Show history for ${milestone.year}`"
              @click="selectedHistoryIndex = index"
            >
              <span class="history-milestone__dot" aria-hidden="true"></span>
              <span class="history-milestone__year">{{ milestone.year }}</span>
            </button>
          </div>
        </div>
        <article class="history-detail" aria-live="polite">
          <h3>{{ historyMilestones[selectedHistoryIndex].year }}</h3>
          <p
            v-for="(paragraph, index) in (historyMilestones[selectedHistoryIndex].paragraphs ?? [historyMilestones[selectedHistoryIndex].text])"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </article>
      </div>
    </section>

    <section id="navigation-4" class="section section--soft navigation-section">
      <div class="container">
        <p class="eyebrow">Our community</p>
        <h2 class="section-heading">Partners and Memberships</h2>
        <div class="partner-grid">
          <a
            v-for="partner in partners.filter((partner) => partner.url)"
            :key="partner.name"
            class="partner-placeholder"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Visit ${partner.name} website (opens in a new tab)`"
          >
            <img :src="partner.image" :alt="partner.name" />
          </a>
          <div
            v-for="partner in partners.filter((partner) => !partner.url)"
            :key="partner.name"
            class="partner-placeholder"
          >
            <img :src="partner.image" :alt="partner.name" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
//style
<style scoped>
.page-hero {
  padding: 75px 0 80px;
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
  max-width: 610px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  margin-top: 30px;
}

.section-nav a {
  color: var(--teal);
  font-size: 13px;
  font-weight: 700;
  transition: color 160ms ease;
}

.section-nav a:hover {
  color: var(--navy);
  text-decoration: underline;
}

.navigation-section {
  min-height: 240px;
  scroll-margin-top: 120px;
}

.history-timeline-scroll {
  overflow-x: auto;
  margin-top: 30px;
  padding: 8px 0 14px;
  scrollbar-color: var(--teal) var(--line);
}

.history-timeline {
  position: relative;
  display: grid;
  min-width: 1060px;
  grid-template-columns: repeat(17, minmax(0, 1fr));
}

.history-timeline::before {
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  height: 2px;
  background: var(--line);
  content: '';
}

.history-milestone {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 0 3px;
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font: inherit;
}

.history-milestone__dot {
  width: 22px;
  height: 22px;
  border: 2px solid var(--teal);
  border-radius: 50%;
  background: #fff;
  transition: background 160ms ease, transform 160ms ease;
}

.history-milestone--active .history-milestone__dot,
.history-milestone:hover .history-milestone__dot {
  transform: scale(1.12);
  background: var(--teal);
}

.history-milestone--active .history-milestone__year {
  color: var(--navy);
  font-weight: 800;
}

.history-milestone__year {
  font-size: 13px;
  text-align: center;
  white-space: nowrap;
}

.history-milestone:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 4px;
}

.history-detail {
  max-width: 900px;
  min-height: 160px;
  margin-top: 18px;
  padding: 24px 28px;
  border-left: 3px solid var(--teal);
  border-radius: 0 5px 5px 0;
  background: #fff;
}

.history-detail h3 {
  margin: 0 0 10px;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 19px;
}

.history-detail p {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.history-detail p:last-child {
  margin-bottom: 0;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin-top: 30px;
}

.partner-placeholder {
  display: grid;
  min-height: 140px;
  place-items: center;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: #fff;
}

.partner-placeholder img {
  width: 100%;
  max-height: 100px;
  object-fit: contain;
}

#navigation-1 {
  scroll-margin-top: 120px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;
  gap: 75px;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.about-image span {
  position: absolute;
  bottom: 16px;
  left: 16px;
  padding: 9px 12px;
  border-radius: 3px;
  background: #fff;
  color: var(--navy);
  font-size: 11px;
  font-weight: 800;
}

.about-grid .section-intro {
  margin-bottom: 18px;
}

.section-title {
  margin-bottom: 30px;
}

.section-title .section-intro {
  margin-top: 10px;
}

.statement-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.statement-card {
  min-height: 280px;
  padding: 29px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: #fff;
}

.statement-card > span {
  color: var(--teal);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.statement-card h3 {
  max-width: 400px;
  margin: 20px 0 15px;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 22px;
  letter-spacing: -0.03em;
  line-height: 1.35;
}

.statement-card blockquote {
  margin: 0;
  color: #62767d;
  font-size: 13px;
  line-height: 1.8;
}

.statement-card--dark {
  border-color: var(--navy);
  background: var(--navy);
}

.statement-card--dark > span {
  color: #a5d9ca;
}

.statement-card--dark h3 {
  color: #fff;
}

.statement-card--dark blockquote {
  color: #bbccd0;
}

.objectives {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
}

@media (max-width: 720px) {
  .page-hero {
    padding: 55px 0 60px;
  }

  .about-grid,
  .statement-grid,
  .objectives {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .partner-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .statement-card {
    min-height: 0;
  }
}
</style>
