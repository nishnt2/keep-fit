import React from "react";
import styles from './back.module.css';
import Link from "next/link";

const Back = () =>{
    return(
        <Link href={"/"} className={styles.back}>
            <div className={styles.chevron}></div>
        </Link>
    )
}

export default Back;