import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


export default function Home() {
  return ( <>

    // 
    <div className={styles.container}>
      <Head >
        <title>Moe Techtainment</title>
        <img src="/moencode.png" alt="Moet" className={styles.logo} />
        <link rel="icon" href="/moeiconb.png" />
     
      </Head>

      <main className={styles.main}>    
        <img src="/moetw.png" alt="Moet" height="200px" />
    

        <div className={styles.grid}>
        <img src="/memoryPalace.png" alt="Moet" height="280px" />
        </div>
        <div className={styles.grid}>
           <h1 className={styles.title}>
           <a href="/memo"><br/><p> Memory Palace</p></a>
           </h1>
        </div>
      </main>

      <footer className={styles.footer}>
    
        <a href="/memo" className={styles.card}>
            <h3>Let's get Smarter One Synapse at a Time &rarr;</h3>
        </a>
     
      </footer>
      {/* <div>
        <a
          href="moetechtainment.com"
          target="_blank"
          rel="noopener noreferrer" >
          Brought to you by{' '}
          <img src="/moetw.png" alt="Moet" height="25px" />
        </a>
        </div> */}
    </div> </>
  )
}
