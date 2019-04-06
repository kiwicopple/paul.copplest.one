<template>
    <div>
        <div class="last-updated">{{page.lastUpdated}}</div>
        <h3>
            <a :href="page.path">{{page.title}}</a>
        </h3>
        <p>
            <template v-if="description">{{description}} <br /></template>
            {{headers}} <br>
        </p>
        <hr>
    </div>
</template>
<script>
    export default {
      props: {page: Object},
      computed: {
        description () {
          return this.page.frontmatter.description
        },
        headers () {
          if(!this.page.headers) return ''
          return this.page.headers
            .filter(h => h.level === 2)
            .map(h => h.title)
            .join(', ')
        }
      }
    }
</script>
<style scoped>
    p {
        margin-top: 0;
    }
    .last-updated {
        float:right;
        font-size: 0.9rem;
        color: #aaa;
    }
</style>