// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = Object.assign({}, require("./src/data/meta.json"), {
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Project", // Required
        baseDir: "./content/project/", // Where .md files are located
        route: "/project/:slug", // Add route prefix. Optional
        template: "./src/templates/Project.vue",
      },
    },
  ],
})
