// react router imports
import { Link } from 'react-router-dom'

// style imports
import styles from '@/styles/home.module.scss'

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.intro}>
          Welcome to
        </h2>
        <h1 className={styles.title}>
          Atomic Pizza
        </h1>
      </div>

      <div className={styles.startContainer}>
        <Link to="/size" className={styles.start}>
          Make My Pizza!
        </Link>
      </div>
    </main>
  )
}

export default Home
