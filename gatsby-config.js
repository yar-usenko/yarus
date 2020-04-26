const metadata = {
  name: 'Yarus',
  title: 'Yarus',
  description: 'Магазин стройматериалов в Павлограде',
  author: 'Yaroslav Usenko'
};

module.exports = {
  siteMetadata: {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    siteUrl: 'https://yarus.now.sh'
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "products",
        path: __dirname + "/content/products"
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
     {
       resolve: "gatsby-plugin-manifest",
       options: {
         // lang: metadata.lang,
         short_name: metadata.name,
         name: metadata.name,
         // description: metadata.description,
         // start_url: metadata.pathPrefix,
         // theme_color: metadata.theme,
         display: "standalone",
         developerName: "Yaroslav Usenko",
         developerURL: "usenko.pp.ua",
         // icon: CONTENT_PATH + "/assets/images/favicon.png",
         cache_busting_mode: "name",
         crossOrigin: "use-credentials"
       },
     },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline"
  ],
}
