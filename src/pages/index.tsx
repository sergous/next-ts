import Link from "next/link"

export default () => (
  <div>
    Hello Next!
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
  </div>
)
