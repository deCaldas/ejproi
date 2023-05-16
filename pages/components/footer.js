import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Footer() {
  return (
    <>
        <div className={styles.center}>
            <a href='https://nextjs.org/' target='_blank'>
                <h6>Powered by &nbsp;</h6>
                <Image
                className={styles.logoNext}
                src="/next.svg"
                alt="Next.js Logo"
                width={73}
                height={23}
                priority
                />
            </a>
            &nbsp;
            <a href='https://decaldas.github.io/home/' target='_blank'>
                <p>
                    &copy; All Rights Reserved. {new Date().getFullYear()} {"<->"} De Caldas.
                </p>
            </a>
        </div>
    </>
  )
}
