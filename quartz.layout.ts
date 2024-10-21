import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
   Component.OnlyFor( //load these components only on the pages declared in 'titles:'
      { titles: ["Welcome to TinyGwen's Garden :3c", "💬 Discussion"] },
      Component.Comments({
        provider: 'giscus',
        options: {
          repo: 'tinygwen/TinyGwens-Garden',
          repoId: 'R_kgDONBpq7Q',
          category: 'Announcements',
          categoryId: 'DIC_kwDONBpq7c4CjdjP',
          reactionsEnabled: false,
          themeUrl: "https://tinygwen.github.io/TinyGwens-Garden/static/giscus", // corresponds to quartz/static/giscus/
          lightTheme: "noborder_light", // corresponds to light-theme.css in quartz/static/giscus/
          darkTheme: "noborder_dark", // corresponds to dark-theme.css quartz/static/giscus/
        }
      })
    ), 
  ],
  

  
  footer: Component.Footer(/**{
     links: {
      Github: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    }, 
  }*/),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [
    // this is the overview web of links, like the one obsidian has
    //Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}
