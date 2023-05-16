import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
    <main className={`${styles.main} ${inter.className}`}>
      <section className={styles.description}>
        <p>
          Entra en el mundo de los negocios con la tecnología de la información
        </p>
        <div>            
          <h3>
            By
          </h3><br />{' '}
          <Image
            className={styles.ejproiLogo}
            src="/logo-ejproi.png"
            alt="Ej Pro I Logo"                
            width={100}
            height={24}
            priority
          />
        </div>
      </section>
      <Footer />
    </main>
    </>
  )
}
