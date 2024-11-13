import Link from "next/link"
import styles from "./Header.module.css"

export default function Headers(){
    return (
        <header>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/sobre">Produção</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}