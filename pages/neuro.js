import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout.js'
// import Sass from '../public/css/sass/materialize.scss'


function Nav() {
  return (

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/baby">
            <a>90s Baby</a>
          </Link>
        </li>
        <li>
          <Link href="/cn">
            <a>Cartoon Network</a>
          </Link>
        </li>
        <li>
          <Link href="/dis">
            <a>Disney</a>
          </Link>
        </li>
        <li>
          <Link href="/misc">
            <a>Misc</a>
          </Link>
        </li>
        <li>
          <Link href="/nick">
            <a>Nick</a>
          </Link>
        </li>
      </ul>
      // 
      
      
      // <div class="nav-wrapper">
      //   <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
      //   <ul class="right hide-on-med-and-down">
      //     <li><a href="sass.html"><i class="material-icons">search</i></a></li>
      //     <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
      //     <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
      //     <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
      //   </ul>
      // </div>
  
  )
}

export default Nav