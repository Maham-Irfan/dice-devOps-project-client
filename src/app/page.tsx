import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>This is a front end service. It fetches a file and its checksum from the api and verifies the integrity of the file by computing a checksum of the received file and comparing it with the received checksum and then saves the received file</p>
      </div>
    </main>
  )
}
