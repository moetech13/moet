import Link from 'next/link';

function Nav() {
  return (
    <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/rela">
        <a>Relative Reality</a>
      </Link>
    </li>
    <li>
      <Link href="/memo">
        <a>Memory Palace</a>
      </Link>
    </li>
    <li>
      <Link href="/neuro">
        <a>Neuro</a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a>IG</a>
      </Link>
    </li>
    <li>
      <Link href="/nick">
        <a>Youtube</a>
      </Link>
    </li>
  </ul>
  )
}

export default Nav