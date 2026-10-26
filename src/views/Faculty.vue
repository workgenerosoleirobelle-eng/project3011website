<script setup>
import { programs } from '../data/programs'
import { collegeStaff, facultyDirectory } from '../data/faculty'

const facultyGroups = Object.values(programs).map((program) => ({
  ...program,
  faculty: facultyDirectory.filter((member) => member.programs.includes(program.slug)),
}))

function getInitials(name) {
  return name.split(/[\s,.]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
}

function hideFailedImage(event) {
  event.currentTarget.style.display = 'none'
}
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">People of CCS</p>
        <h1>Faculty &amp; Staff</h1>
        <p>Meet the educators and staff who support learning across the College of Computer Studies.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="directory-heading">
          <p class="eyebrow">per academic program</p>
          <h2 class="section-heading">Teaching Teams</h2>
          <p class="section-intro">Why Stumble Through the Dark When There is a Candle to Your Right.</p>
        </div>

        <div class="faculty-groups">
          <article v-for="program in facultyGroups" :key="program.slug" class="faculty-group">
            <div class="faculty-group__top">
              <span>{{ program.acronym }}</span>
              <RouterLink :to="`/programs/${program.slug}`">Program details ↗</RouterLink>
            </div>
            <h3>{{ program.fullName }}</h3>
            <div class="faculty-list">
              <div v-for="member in program.faculty" :key="member.name" class="faculty-person">
                <span class="profile-photo profile-photo--faculty">
                  <img :src="member.image" :alt="member.imageAlt" loading="lazy" @error="hideFailedImage" />
                  <span aria-hidden="true">{{ getInitials(member.name) }}</span>
                </span>
                <div>
                  <h4>{{ member.name }}</h4>
                  <p>{{ member.role }}</p>
                  <small>Specialization not listed.</small>
                </div>
              </div>
            </div>
          </article>
        </div>
        <section class="college-staff">
          <div class="staff-heading">
            <p class="eyebrow">College-wide roles</p>
            <h2 class="section-heading">Leadership &amp; support</h2>
          </div>
          <div class="staff-list">
            <article v-for="member in collegeStaff" :key="member.name" class="staff-person">
              <span class="profile-photo profile-photo--staff">
                <img :src="member.image" :alt="member.imageAlt" loading="lazy" @error="hideFailedImage" />
                <span aria-hidden="true">{{ getInitials(member.name) }}</span>
              </span>
              <div><h3>{{ member.name }}</h3><p>{{ member.role }}</p></div>
            </article>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 68px 0 72px;
  background: #edf5f3;
}

.page-hero h1 {
  margin: 0;
  color: var(--navy);
  font-family: var(--serif);
  font-size: clamp(42px, 6vw, 64px);
  font-weight: 800;
  letter-spacing: -0.06em;
}

.page-hero > .container > p:last-child {
  max-width: 600px;
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.directory-heading {
  margin-top: 60px;
}

.directory-heading .section-intro {
  margin-top: 10px;
}

.faculty-groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 28px;
}

.faculty-group {
  min-height: 190px;
  padding: 23px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #fff;
}

.faculty-group__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.faculty-group__top > span {
  color: var(--teal);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.faculty-group__top a {
  color: #77888d;
  font-size: 12px;
  font-weight: 700;
}

.faculty-group h3 {
  margin: 18px 0 9px;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 18px;
  line-height: 1.4;
}

.faculty-group p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.faculty-list {
  display: grid;
  gap: 12px;
  margin-top: 17px;
}

.faculty-person,
.staff-person {
  display: flex;
  align-items: center;
  gap: 13px;
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

.profile-photo--faculty {
  width: 62px;
  height: 72px;
}

.profile-photo--staff {
  width: 57px;
  height: 65px;
}

.profile-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.faculty-person h4,
.staff-person h3 {
  margin: 0;
  color: var(--navy);
  font-size: 12px;
  line-height: 1.5;
}

.faculty-person p,
.staff-person p {
  margin: 3px 0;
  color: var(--teal);
  font-size: 12px;
  font-weight: 700;
}

.faculty-person small {
  color: var(--muted);
  font-size: 11px;
}

.college-staff {
  margin-top: 58px;
}

.staff-heading {
  margin-bottom: 21px;
}

.staff-heading .section-heading {
  font-size: clamp(27px, 3vw, 36px);
}

.staff-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.staff-person {
  min-width: 0;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #fff;
}

@media (max-width: 650px) {
  .faculty-groups {
    grid-template-columns: 1fr;
  }

  .staff-list {
    grid-template-columns: 1fr;
  }

}
</style>
