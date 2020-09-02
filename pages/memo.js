import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


export default function Memo() {
  return (<>
    <div className={styles.container}>
      <Head >
        <title>Moe Techtainment</title>
        <img src="/moetw.png" alt="Moet" height="100px" />
        <link rel="icon" href="/moeiconb.png" />
     
      </Head>

      <main className={styles.main}>        
        <video height="100%" controls autoPlay>
        <source type="video/mp4" src="/hook.mov" ></source>
        </video>
      </main>

      <footer className={styles.footer}>
    
        <a href="/memo" className={styles.card}>
            <h3>Let's get Smarter One Synapse at a Time &rarr;</h3>
        </a>
     
      </footer>
      <div>
        <a
          href="moetechtainment.com"
          target="_blank"
          rel="noopener noreferrer" >
          Let's get Smarter<img src="/moetw.png" alt="Moet" height="25px" />
 One Synapse at a Time ! 
        </a>
        </div>
    </div>
       
    </>
  )
}

