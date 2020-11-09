import Head from 'next/head'
import styles from '../styles/Index.module.css'
import _global_styles from '../styles/_global.module.css'
import Menu from '../components/menu'

export default function Home() {
  return (

    <div className={_global_styles.app_container} >
      <Menu />
      <div className={_global_styles.content_container}  >
 
          <div className={styles.header1}>Tiago Morais</div>
          <div className={styles.header2}>Full Stack Developer</div>
     
      </div>
    </div>
  )
}
