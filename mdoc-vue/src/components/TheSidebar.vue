<template>
  <aside class="main-sidebar">
    <BaseSideNavButton
      title="Export Markdown"
      imagePath="./src/assets/icons/markdown-file.svg"
      @click="makeMarkdownFile(documentData)"
    />
    <BaseSideNavButton
      title="Export HTML"
      imagePath="./src/assets/icons/html-file.svg"
      @click="makeHTMLFile(documentData)"
    />
    <BaseSideNavButton
      title="Export PDF"
      imagePath="./src/assets/icons/pdf-file.svg"
      @click="makePDFFile(documentData)"
    />
  </aside>
</template>

<script setup>
import BaseSideNavButton from './base/BaseSideNavButton.vue';
import css from '../assets/css/default-style.css'

const md = window.markdownit(); // import from CDN

defineProps({
  documentData: {
    type: String,
    required: true,
  }
})

const makeMarkdownFile = (documentData) => {
  alert(documentData);
}

const makeHTMLFile = (documentData) => {
  const html = md.render(documentData);
  const htmlWithStyle =
    `<style>${css}</style>
    <article class="markdown-body">
      ${html}
    </article>`;
  alert(htmlWithStyle);
}

const makePDFFile = (documentData) => {
  alert(documentData);
}
</script>

<style scoped>
.main-sidebar {
  background-color: #444;
  padding: 40px 0 0 0;
  width: 120px;
  height: 100vh;
}
</style>

