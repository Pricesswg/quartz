import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Appunti di Simon",
    pageTitleSuffix: " · Appunti di Simon",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "it-IT",
    baseUrl: "appunti.alessandrosimonitto.it",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Source Sans Pro",
        code: "JetBrains Mono",
      },
      // Palette allineata ad alessandrosimonitto.it (token in src/styles/global.css, nov 2026):
      // carbone #10110F, testo crema #ECE7DF, grigio #A4A19B, accento arancione #EB6C37
      // (hover #F3824F), giallo #FFC200 solo come segnale (evidenziazioni, focus).
      // Light e dark sono uguali per garantire coerenza anche se l'utente ha "light" salvato.
      colors: {
        lightMode: {
          light: "#10110F",
          lightgray: "#2A2B26",
          gray: "#A4A19B",
          darkgray: "#ECE7DF",
          dark: "#ECE7DF",
          secondary: "#EB6C37",
          tertiary: "#F3824F",
          highlight: "rgba(235, 108, 55, 0.12)",
          textHighlight: "rgba(255, 194, 0, 0.30)",
        },
        darkMode: {
          light: "#10110F",
          lightgray: "#2A2B26",
          gray: "#A4A19B",
          darkgray: "#ECE7DF",
          dark: "#ECE7DF",
          secondary: "#EB6C37",
          tertiary: "#F3824F",
          highlight: "rgba(235, 108, 55, 0.12)",
          textHighlight: "rgba(255, 194, 0, 0.30)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        // Il sito è dark-only anche con saved-theme="light" (OS in modalità chiara):
        // con github-light i blocchi di codice diventano illeggibili sullo sfondo carbone.
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
