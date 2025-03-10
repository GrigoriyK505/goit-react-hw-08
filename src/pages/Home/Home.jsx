import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import s from './Home.module.css'
const Home = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <div className={s.container}>
        <nav className={s.nav}>
            <ul className={s.tabsContainer}>
                {tabs.map((item) => (
                    <motion.li
                        key={item.label}
                        initial={false}
                        animate={{
                            backgroundColor:
                                item === selectedTab ? "#eee" : "#eee0",
                        }}
                        className={s.tab}
                        onClick={() => setSelectedTab(item)}
                    >
                        {`${item.icon} ${item.label}`}
                        {item === selectedTab ? (
                            <motion.div
                                className={s.underline}
                                layoutId="underline"
                                id="underline"
                            />
                        ) : null}
                    </motion.li>
                ))}
            </ul>
        </nav>
        <main className={s.iconContainer}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={s.icon}
                >
                    {selectedTab ? selectedTab.icon : "😋"}
                </motion.div>
            </AnimatePresence>
        </main>
    </div>
)
}


const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]


export default Home