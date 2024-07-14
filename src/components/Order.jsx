import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition:{
      delay:0.1, 
      type:"spring", 
      mass:0.4, 
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    },
    
  },
}

const childVariants ={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
  }
}


const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true)
  setTimeout(()=> {
    setShowTitle(false)
    showTitle
  }, 3000)

  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial= "hidden"
    animate= "visible"
    >
      {/*
     <AnimatePresence >
      {showTitle && <motion.h2
        exit={{y:"-100vh"}}
        transition={{duration:1}}
      >Thank you for your order :)</motion.h2>}
      </AnimatePresence>
    */}
    <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>

      <motion.div variants={childVariants}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    
    </motion.div>
  )
}

export default Order;