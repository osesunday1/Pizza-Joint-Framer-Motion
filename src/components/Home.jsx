import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants={
  hidden: {
    opacity:0,
  },
  visible:{
    opacity:1,
  },
  exit:{
    x:'-100vw',
    transition:{ease: "easeInOut"}
  }
}

const buttonVariants ={
  
  hover:{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition:{
      repeat:Infinity,
      repeatType: "mirror",
      duration: 0.3
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <motion.h2
      initial={{color: '#f1ee0e', scale:0}}
      animate={{ 
        fontSize: 80, 
        color: '#ffffff', 
        scale:1,
      }}
      transition={{duration: 2}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariants}
         whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;