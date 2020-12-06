import Head from 'next/head'
import styles from '../styles/about.module.css'
import _global_styles from '../styles/_global.module.css'
import Menu from '../components/menu'

export default function Home() {
  return (

    <div className={_global_styles.app_container} >
      <Menu />
      <div className={_global_styles.content_container}  >
 
         <div className={styles.container}>
            <div className={styles.about_container}>
                <p className={styles.about_header}>Sobre Mim</p>
                <div className={styles.about_container2}>
                    <img className={styles.photo}></img>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum molestias saepe assumenda excepturi eligendi qui, fugit ipsa animi! Fugit architecto harum provident magnam vero quidem beatae illo exercitationem unde ea!</p>
                </div>
            </div>

            <div className={styles.services}> 
                <p>Serviços</p>
                <div className={styles.panels_container}>
                    <div className={styles.panel}>

                    </div>
                    <div className={styles.panel}>

                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}
