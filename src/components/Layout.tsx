import Head from "next/head"
import Link from "next/link"
import { Menu } from "antd"

export default ({ title = null, children = null }) => (
  <div>
    <Head>
      {title && <title>{title}</title>}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css"
      />
    </Head>
    {title && <h1>{title}</h1>}

    <Menu>
      <Menu.Item>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </Menu.Item>
    </Menu>
    <div>{children}</div>
  </div>
)
