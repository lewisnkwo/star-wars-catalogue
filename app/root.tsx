import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "./styles/global.css";
import layoutStyles from "./components/pages/layout/index.css";
import headerStyles from "./components/shared/header/index.css";
import homeStyles from "./components/pages/content/home/index.css";
import characterCardStyles from "./components/pages/content/home/character-card/index.css";
import footerStyles from "./components/shared/footer/index.css";
import imageStyles from "./components/shared/image/index.css";
import sidebarStyles from "./components/shared/sidebar/index.css";
import sidebarItemStyles from "./components/shared/sidebar/sidebar-item/index.css";
import sidebarDetailStyles from "./components/shared/sidebar-detail/index.css";
import sidebarDetailPostItemStyles from "./components/shared/sidebar-detail/post-item/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Lewis Nkwo",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: layoutStyles },
    { rel: "stylesheet", href: headerStyles },
    { rel: "stylesheet", href: homeStyles },
    { rel: "stylesheet", href: characterCardStyles },
    { rel: "stylesheet", href: footerStyles },
    { rel: "stylesheet", href: imageStyles },
    { rel: "stylesheet", href: sidebarStyles },
    { rel: "stylesheet", href: sidebarItemStyles },
    { rel: "stylesheet", href: sidebarDetailStyles },
    { rel: "stylesheet", href: sidebarDetailPostItemStyles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
