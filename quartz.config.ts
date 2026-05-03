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
      // Palette allineata ad alessandrosimonitto.it: dark-only, accent giallo.
      // Light e dark sono uguali per garantire coerenza anche se l'utente ha "light" salvato.
      colors: {
        lightMode: {
          light: "#0d0d0d",
          lightgray: "#1c1c1c",
          gray: "#777777",
          darkgray: "#cccccc",
          dark: "#ffffff",
          secondary: "#FFAA00",
          tertiary: "#FFC340",
          highlight: "rgba(255, 170, 0, 0.12)",
          textHighlight: "rgba(255, 170, 0, 0.30)",
        },
        darkMode: {
          light: "#0d0d0d",
          lightgray: "#1c1c1c",
          gray: "#777777",
          darkgray: "#cccccc",
          dark: "#ffffff",
          secondary: "#FFAA00",
          tertiary: "#FFC340",
          highlight: "rgba(255, 170, 0, 0.12)",
          textHighlight: "rgba(255, 170, 0, 0.30)",
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
        theme: {
          light: "github-light",
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
