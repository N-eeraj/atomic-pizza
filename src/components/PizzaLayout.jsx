// react imports
import { useEffect, useState } from 'react'

// react router imports
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

// framer motion imports
import { motion } from 'framer-motion'

// component imports
import Pizza from '@/components/Pizza'
import PizzaContextProvider  from '@/components/Context'

// image import
import backImg from '@/assets/back.svg'

// style imports
import styles from '@/styles/pizzaLayout.module.scss'

// data imports
import data from '@/process'

const PizzaLayout = () => {
  const [routeData, setRouteData] = useState({})
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setRouteData(data[location.pathname])
  }, [location.pathname])

  return (
    <main className={styles.container}>
      <nav className={styles.topBar}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={styles.backButton}
          onClick={() => navigate(-1)}>
          <img src={backImg} />
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, x: -12, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          key={location.pathname}
          className={styles.title}>
          {routeData.title}
        </motion.h1>
      </nav>

      <PizzaContextProvider>
        {
          routeData.link &&
            <motion.section
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                type: 'spring',
                stiffness: 100,
              }}
              key={location.pathname}>
              <Outlet />
            </motion.section>
        }

        <Pizza />

        { routeData.actionText &&
            <button className={styles.nextButton} onClick={() => navigate('/')}>
              {routeData.actionText}
            </button>
        }
      </PizzaContextProvider>

      { routeData.link &&
          <Link className={styles.nextButton} to={routeData.link.to}>
            {routeData.link.text}
          </Link>
      }
    </main>
  )
}

export default PizzaLayout
