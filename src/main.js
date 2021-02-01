// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"
import info from "~/data/meta.json"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  head.meta.push(
    ...[
      {
        key: "description",
        name: "description",
        content: info.siteDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        key: "og:url",
        property: "og:url",
        content: info.siteUrl,
      },
      {
        key: "og:site_name",
        property: "og:site_name",
        content: info.siteName,
      },
      {
        key: "og:description",
        property: "og:description",
        content: info.siteDescription,
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        key: "twitter:creator",
        name: "twitter:creator",
        content: info.author,
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: info.siteName,
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: info.siteDescription,
      },
    ]
  )
}
