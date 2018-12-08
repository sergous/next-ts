import Head from "next/head"
import Link from "next/link"
import Layout from "../components/Layout"

export default () => (
  <Layout title="Hello Next!">
    <Head>
      <meta name="description" content="React Next with antd design template" />
    </Head>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </li>
    </ul>
  </Layout>
)
