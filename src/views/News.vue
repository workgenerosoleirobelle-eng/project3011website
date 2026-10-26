<script setup>
const posts = [
  {
    title: 'Community Engagement MOA Signing Ceremony',
    date: 'December 8, 2021',
    category: 'Community engagement',
    excerpt: 'A community engagement memorandum of agreement signing.',
  },
  {
    title: 'Congratulations to our New Librarians!',
    date: 'November 23, 2021',
    category: 'College community',
    excerpt: 'Recognition of new librarians and their licensure examination achievement.',
  },
  {
    title: 'Kation Technologies hires CCS graduates',
    date: 'November 23, 2021',
    category: 'Alumni & careers',
    excerpt: 'A news item about graduates joining Kation Technologies.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">News &amp; Updates</p>
        <h1>Stories from<br /><em>our community.</em></h1>
        <p>Announcements and activities from the College.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="archive-alert">
          <span aria-hidden="true">◷</span>
          <p><strong>Archive notice</strong> — these posts date from 2021 and are presented as archived announcements.</p>
        </div>
        <div class="news-grid">
          <article v-for="post in posts" :key="post.title" class="news-card">
            <div class="news-card__top">
              <span class="news-card__category">{{ post.category }}</span>
            </div>
            <div class="news-card__date">{{ post.date }}</div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
          </article>
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

.archive-alert {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 17px 20px;
  border: 1px solid #f0dfbd;
  border-radius: 4px;
  background: #fff9ed;
}

.archive-alert > span {
  color: #bd872d;
  font-size: 18px;
}

.archive-alert p {
  margin: 0;
  color: #6f6857;
  font-size: 12px;
  line-height: 1.7;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 27px;
}

.news-card {
  min-height: 300px;
  padding: 23px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #fff;
}

.news-card__top {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
}

.news-card__category {
  padding: 6px 8px;
  border-radius: 2px;
  background: var(--pale);
  color: var(--teal);
  font-size: 11px;
  font-weight: 800;
}

.news-card__date {
  margin-top: 24px;
  color: #86969b;
  font-size: 12px;
  font-weight: 700;
}

.news-card h2 {
  margin: 9px 0 10px;
  color: var(--navy);
  font-family: var(--serif);
  font-size: 20px;
  letter-spacing: -0.03em;
  line-height: 1.4;
}

.news-card p {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.75;
}

@media (max-width: 760px) {
  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-card {
    min-height: 260px;
  }

}
</style>
