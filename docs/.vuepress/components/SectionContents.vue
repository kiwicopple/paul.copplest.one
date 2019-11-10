<template>
  <section>
    <page-details v-for="page in pages" :key="page.key" :page="page" />
  </section>
</template>
<script>
import PageDetails from './PageDetails'
export default {
  components: { PageDetails },
  computed: {
    pages() {
      const path = this.$page.path
      console.log('this.', this.$site.pages)
      return this.$site.pages
        .filter(p => p.path && p.path.startsWith(path) && p.path !== path)
        .filter(p => !p.frontmatter || (p.frontmatter && p.frontmatter.draft != true))
        .sort((a, b) => {
          try {
            return a.frontmatter.date < b.frontmatter.date
          } catch (error) {
            return false
          }
        })
    },
  },
}
</script>
