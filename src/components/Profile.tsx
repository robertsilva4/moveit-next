import { Profiler } from "inspector";

import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/robertsilva4.png" alt="Robert Silva"/>
            <div>
                <strong>Robert Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}