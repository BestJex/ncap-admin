<template>
  <div class="d2-badge">
    <p :key="groupIndex" align="center" v-for="(group, groupIndex) of badges">
      <a :href="badge.link" :key="badgeIndex" target="_blank" v-for="(badge, badgeIndex) of group">
        <img :src="badge.img"/>
      </a>
    </p>
  </div>
</template>

<script>
const linkD2Admin = 'https://github.com/d2-projects/d2-admin'
export default {
  data () {
    return {
      badges: [
        [
          { img: 'https://img.shields.io/github/stars/d2-projects/d2-admin.svg', link: `${linkD2Admin}/stargazers` },
          {
            img: 'https://img.shields.io/github/forks/d2-projects/d2-admin.svg',
            link: `${linkD2Admin}/network/members`,
          },
          { img: 'https://img.shields.io/github/issues/d2-projects/d2-admin.svg', link: `${linkD2Admin}/issues` },
          {
            img: 'https://img.shields.io/github/issues-closed/d2-projects/d2-admin.svg',
            link: `${linkD2Admin}/issues?q=is%3Aissue+is%3Aclosed`,
          },
          { img: 'https://img.shields.io/github/issues-pr/d2-projects/d2-admin.svg', link: `${linkD2Admin}/pulls` },
          {
            img: 'https://img.shields.io/github/issues-pr-closed/d2-projects/d2-admin.svg',
            link: `${linkD2Admin}/pulls?q=is%3Apr+is%3Aclosed`,
          },
          { img: 'https://img.shields.io/github/last-commit/d2-projects/d2-admin.svg', link: linkD2Admin },
        ],
        [
          {
            img: 'https://github.com/d2-projects/d2-admin-start-kit/workflows/Deploy%20https%3A%2F%2Fd2.pub/badge.svg',
            link: `${linkD2Admin}/actions?query=workflow%3A%22Deploy+https%3A%2F%2Fd2.pub%22`,
          },
          {
            img: 'https://github.com/d2-projects/d2-admin-start-kit/workflows/Deploy%20https%3A%2F%2Fcdn.d2.pub/badge.svg',
            link: `${linkD2Admin}/actions?query=workflow%3A%22Deploy+https%3A%2F%2Fcdn.d2.pub%22`,
          },
          {
            img: 'https://github.com/d2-projects/d2-admin-start-kit/workflows/Deploy%20Github/badge.svg',
            link: `${linkD2Admin}/actions?query=workflow%3A%22Deploy+Github%22`,
          },
          {
            img: 'https://api.netlify.com/api/v1/badges/08ff8c93-f0a8-497a-a081-440b31fb3aa4/deploy-status',
            link: 'https://app.netlify.com/sites/d2-admin-start-kit/deploys',
          },
        ],
        [
          {
            img: 'https://visitor-count-badge.herokuapp.com/today.svg?repo_id=d2-projects.d2-admin',
            link: linkD2Admin,
          },
          {
            img: 'https://visitor-count-badge.herokuapp.com/total.svg?repo_id=d2-projects.d2-admin',
            link: linkD2Admin,
          },
          { img: 'https://img.shields.io/github/release/d2-projects/d2-admin.svg', link: `${linkD2Admin}/releases` },
        ],
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.d2-badge {
  margin-bottom: 20px;

  p {
    margin: 0px;
    margin-bottom: 2px;

    &:last-child {
      margin-bottom: 0px;
    }

    img {
      display: inline-block;
      margin: 0px 2px;
    }
  }
}
</style>
