import { useState } from "react";
import styles from './ad.module.css'


export default function Ad() {

const [popup, setPopup] = useState(true);

    return(
        <>
        {
            popup ?
            <div className={styles.container}>
                <div className={styles.popup__area}>
                    <div onClick={() => setPopup(false)}>close</div>
                    Welcome
                </div>
            </div>
            : <></>
        }
        
        </>
    )
}
