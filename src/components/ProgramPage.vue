<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { programs } from '../data/programs'
import { facultyDirectory } from '../data/faculty'

const props = defineProps({
  programId: {
    type: String,
    required: true,
  },
})

const program = computed(() => programs[props.programId])
const programFaculty = computed(() => facultyDirectory.filter((member) => member.programs.includes(props.programId)))

function getInitials(name) {
  return name.split(/[\s,.]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
}

function hideFailedImage(event) {
  event.currentTarget.style.display = 'none'
}
</script>

<template>
  <div v-if="program" class="program-page" :class="`program-page--${program.theme}`">
    <section class="program-hero">
      <div class="container program-hero__grid">
        <div class="program-hero__copy">
          <RouterLink class="back-link" to="/#programs">← All programs</RouterLink>
          <p class="eyebrow program-eyebrow">{{ program.acronym }} · Academic Program</p>
          <h1>{{ program.fullName }}</h1>
          <p class="program-hero__tagline">{{ program.tagline }}</p>
          <a class="button" href="#overview">Explore the program <span aria-hidden="true">↓</span></a>
        </div>
        <div class="program-hero__visual">
          <img :src="program.image" :alt="program.imageAlt" />
          <span class="visual-stamp">{{ program.acronym }}</span>
          <span class="visual-caption">Learn · Create · Serve</span>
        </div>
      </div>
    </section>

    <section id="overview" class="section">
      <div class="container program-overview">
        <div>
          <p class="eyebrow">Program overview</p>
          <h2 class="section-heading">Study {{ program.shortName }} at CPU</h2>
          <p class="section-intro">{{ program.overview }}</p>
          <p v-if="program.note" class="content-note">{{ program.note }}</p>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container details-grid">
        <article class="detail-panel">
          <p class="eyebrow">What you'll develop</p>
          <h2 class="section-heading">Program objectives</h2>
          <ul class="content-list">
            <li v-for="objective in program.objectives" :key="objective">{{ objective }}</li>
          </ul>
        </article>
        <article class="detail-panel detail-panel--areas">
          <p class="eyebrow">Explore the discipline</p>
          <h2 class="section-heading">Areas of study</h2>
          <div class="tag-list">
            <span v-for="area in program.areas" :key="area">{{ area }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="highlights-heading">
          <div>
            <p class="eyebrow">Course highlights</p>
            <h2 class="section-heading">Build a strong foundation</h2>
          </div>
          <p>Representative subjects and skills from the program.</p>
        </div>
        <div class="course-grid">
          <div v-for="(course, index) in program.highlights" :key="course" class="course-item">
            <span>0{{ index + 1 }}</span><strong>{{ course }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="career-section">
      <div class="container career-grid">
        <div>
          <p class="eyebrow">Where it can take you</p>
          <h2 class="section-heading">Career opportunities</h2>
          <p>Possible career directions vary with experience, electives, and professional development.</p>
        </div>
        <ul class="career-list">
          <li v-for="career in program.careers" :key="career"><span aria-hidden="true">↗</span>{{ career }}</li>
        </ul>
      </div>
    </section>

    <section class="section faculty-preview">
      <div class="container faculty-preview__inner">
        <div class="faculty-badge" aria-hidden="true">CCS</div>
        <div>
          <p class="eyebrow">Meet the people behind the program</p>
          <h2 class="section-heading">Faculty &amp; staff</h2>
          <div v-if="programFaculty.length" class="program-faculty-list">
            <article v-for="member in programFaculty" :key="member.name" class="program-faculty">
              <span class="profile-photo profile-photo--program">
                <img :src="member.image" :alt="member.imageAlt" loading="lazy" @error="hideFailedImage" />
                <span aria-hidden="true">{{ getInitials(member.name) }}</span>
              </span>
              <span class="program-faculty__details">
                <strong>{{ member.name }}</strong>
                <small>{{ member.role }}</small>
                <small>Specialization unknown.</small>
              </span>
            </article>
          </div>
          <p v-else class="faculty-preview__empty">Faculty information for this program is not available.</p>
          <RouterLink class="text-link" to="/faculty">Visit the faculty directory <span aria-hidden="true">→</span></RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.program-hero {
  overflow: hidden;
  background: #edf5f3;
}

.program-hero__grid {
  display: grid;
  min-height: 485px;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 62px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.program-hero__copy {
  padding-block: 8px;
}

.program-hero .eyebrow::before {
  display: none;
}

.back-link {
  display: block;
  width: fit-content;
  margin-bottom: 22px;
  color: #5e737b;
  font-size: 12px;
  font-weight: 700;
}

.program-eyebrow {
  margin-left: 3px;
  margin-bottom: 14px;
}

.back-link:hover {
  color: var(--teal);
}

.program-hero h1 {
  max-width: 610px;
  margin: 0;
  color: var(--navy);
  font-family: var(--serif);
  font-size: clamp(36px, 5vw, 57px);
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 1.09;
}

.program-hero__tagline {
  max-width: 490px;
  margin: 20px 0 25px;
  color: #60757c;
  font-size: 16px;
  line-height: 1.7;
}

.program-hero__visual {
  position: relative;
  height: 365px;
  overflow: hidden;
  border-radius: 6px 65px 6px 6px;
  background: #c8ded9;
  box-shadow: 16px 17px 0 #dceae7;
}

.program-hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.program-hero__visual::after {
  position: absolute;
  inset: 45% 0 0;
  background: linear-gradient(transparent, rgb(10 34 45 / 58%));
  content: '';
}

.visual-stamp,
.visual-caption {
  position: absolute;
  z-index: 1;
  color: #fff;
}

.visual-stamp {
  top: 18px;
  right: 18px;
  padding: 10px 12px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 50%;
  background: rgb(16 45 64 / 45%);
  font-size: 13px;
  font-weight: 800;
}

.visual-caption {
  bottom: 20px;
  left: 22px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.program-overview .section-intro {
  font-size: 16px;
}

.content-note {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.content-note {
  padding: 12px 15px;
  border-left: 3px solid var(--gold);
  background: #fff9ed;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 68px;
}

.details-grid .section-heading,
.highlights-heading .section-heading,
.career-grid .section-heading,
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 25px;
}

.tag-list span {
  padding: 9px 11px;
  border: 1px solid #d9e5e2;
  border-radius: 3px;
  background: #fff;
  color: #4b6269;
  font-size: 13px;
  line-height: 1.4;
}

.highlights-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}

.highlights-heading > p {
  max-width: 350px;
  margin: 0 0 5px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  margin-top: 32px;
  background: var(--line);
  border: 1px solid var(--line);
}

.course-item {
  display: flex;
  min-height: 155px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px;
  background: #fff;
}

.course-item span {
  color: var(--gold);
  font-size: 13px;
  font-weight: 800;
}

.course-item strong {
  color: var(--navy);
  font-family: var(--serif);
  font-size: 13px;
  line-height: 1.5;
}

.career-section {
  padding: 70px 0;
  background: var(--navy);
}

.career-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 80px;
  align-items: start;
}

.career-grid .section-heading {
  color: #fff;
}

.career-grid .eyebrow {
  color: #8fcebf;
}

.career-grid > div > p:last-child {
  max-width: 350px;
  margin-top: 15px;
  color: #aabdc4;
  font-size: 13px;
  line-height: 1.7;
}

.career-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.career-list li {
  display: flex;
  min-height: 54px;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid rgb(255 255 255 / 15%);
  color: #f3edf5;  
  font-size: 12px;
}

.career-list li span {
  color: var(--gold);
}

.faculty-preview {
  background: #f5f8f7;
}

.faculty-preview__inner {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 30px;
  align-items: start;
}

.faculty-badge {
  display: grid;
  width: 90px;
  height: 90px;
  place-items: center;
  border: 1px solid #c8dbd6;
  border-radius: 50%;
  color: var(--teal);
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 800;
}


.program-faculty-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 19px;
}

.program-faculty {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
  padding: 11px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #fff;
}

.profile-photo {
  position: relative;
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  overflow: hidden;
  border-radius: 3px;
  background: #dcebe6;
  color: var(--teal);
  font-size: 13px;
  font-weight: 800;
}

.profile-photo--program {
  width: 54px;
  height: 62px;
}

.profile-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.program-faculty__details {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.program-faculty strong {
  color: var(--navy);
  font-size: 13px;
  line-height: 1.4;
}

.program-faculty small,
.faculty-preview__empty {
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
}

.faculty-preview .text-link {
  margin-top: 16px;
}

.program-page--computer-science .program-hero { background: #edf1f7; }
.program-page--digital-media .program-hero { background: #f5eef6; }
.program-page--library .program-hero { background: #f5f1e9; }

@media (max-width: 900px) {
  .program-hero__grid {
    gap: 35px;
  }

  .career-grid {
    gap: 40px;
  }

  .course-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 700px) {
  .program-hero__grid,
  .details-grid,
  .career-grid {
    grid-template-columns: 1fr;
  }

  .program-hero__grid {
    gap: 32px;
    padding-top: 25px;
    padding-bottom: 40px;
  }

  .back-link {
    margin-bottom: 18px;
  }

  .program-hero__visual {
    height: 260px;
  }

  .details-grid,
  .career-grid {
    gap: 35px;
  }

  .highlights-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .career-list {
    grid-template-columns: 1fr;
  }

  .faculty-preview__inner {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .program-faculty-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .course-grid {
    grid-template-columns: 1fr;
  }

  .course-item {
    min-height: 105px;
  }
}
</style>
