import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Menu.module.css'

export default function Home(ref) {
    let iconDiv = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    let menuDiv = React.useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>;
    let menuContainerDiv = React.useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>;
    let isMenuopen=false;


    React.useEffect(() => {
        window.addEventListener("resize", () => {
            let current = menuContainerDiv.current as HTMLElement;
            if (window.innerWidth>600){
                current.style.height="100vh";
            } else{
                current.style.height="0vh";
            }
        });
      }, []);

    function MenuClick(e){
        let current = menuContainerDiv.current as HTMLElement;
        if(isMenuopen){
            current.style.height="0vh";
            e.currentTarget.classList.remove(styles.change);

        }else{
            current.style.height="100vh";
            e.currentTarget.classList.add(styles.change);
        }
        console.log(e);
        isMenuopen=!isMenuopen;
    }

    function ChangeIconText(hover, e) {
        let current = iconDiv.current as HTMLElement;
        console.log(window.innerWidth);
        if (hover && window.innerWidth>600 ) {
            current.innerHTML = "Tiago Morais";
        } else {
            current.innerHTML = "TM";
        }
    }

    return (
        <div className={styles.menu_container} onMouseOver={ChangeIconText.bind(this, true)} onMouseLeave={ChangeIconText.bind(this, false)} >
            <div className={styles.icon_container}>
                <div className={styles.icon} ref={iconDiv} > TM </div>
                <div className ={styles.menu_icon} onClick={MenuClick.bind(this)}>
               
                    <div className ={styles.bar1}></div>
                    <div className ={styles.bar2}></div>
                    <div className ={styles.bar3}></div>
                </div>
            </div>
            <div className={styles.menu_links_container} ref={menuContainerDiv}>
                <div className={styles.menu_link}>
                    <img src="/icons/home-black-18dp.svg" className={styles.home_icon} />
                    <p>Home</p>
                </div>
                <div className={styles.menu_link}>
                    <img src="/icons/face-black-18dp.svg" className={styles.home_icon} />
                    <p>Portefólio</p>
                </div>
                <div className={styles.menu_link}>
                    <img src="/icons/work-24px.svg" className={styles.home_icon} />
                    <p>Sobre mim</p>
                </div>
                <div className={styles.menu_link}>
                    <img src="/icons/contact_page-24px.svg" className={styles.home_icon} />
                    <p>Currículo</p>
                </div>
            </div>
        </div>
    )
}