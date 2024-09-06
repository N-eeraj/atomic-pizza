// react router imports
import { Link } from 'react-router-dom'

// framer motion imports
import { motion } from 'framer-motion'

// style imports
import styles from '@/styles/home.module.scss'

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <motion.h2
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.intro}>
          Welcome to
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
            type: 'spring',
            stiffness: 600
          }}
          className={styles.title}>
          Atomic Pizza
        </motion.h1>
      </div>

      <Link to="/size" className={styles.startContainer}>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.5,
              type: 'spring',
              stiffness: 400
            }
          }}
          whileHover={{
            scaleX: 0.95,
            transition: {
              delay: 0,
              type: 'spring',
              stiffness: 600,
            }
          }}
          className={styles.start}>
          Make My Pizza!
        </motion.button>
      </Link>
    </main>
  )
}

export default Home
