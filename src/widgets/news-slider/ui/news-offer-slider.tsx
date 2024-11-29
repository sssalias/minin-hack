import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface INews {
    title: string,
    body: string,
    img: string
}

const news:INews[] = [
    {
        title: 'Негр съели евреев',
        body: 'Вау шок',
        img: 'https://sun9-41.userapi.com/impg/wU7-3HIScTSkQSv7_l6p4-Wk0HpX1S-1tkv58w/lqxcZb8fCik.jpg?size=2560x1707&quality=95&sign=45a54ed4add93bd2c492df672b02d51f&type=album'
    },
    {
        title: 'Ковлад съел негров',
        body: 'Месть ковлада',
        img: 'https://sun9-2.userapi.com/impg/KkfUtiVfBAIVa2VRQ-BRXmFiJ5xwAoKnx0RxzA/qxZXSQn31mM.jpg?size=2560x1707&quality=95&sign=eda112c75dc051ca43d8bf23634e1cb9&type=album'
    }
]

const NewsOfferSlider: React.FC = () => {


    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentSlide + 1 < news.length) {
                setCurrentSlide(currentSlide + 1)
            } else {
                setCurrentSlide(0)
            }
        }, 3000)

        return () => clearInterval(timer)
    },)

    return (
        <div className='w-full h-[750px]'>
            {news.map((el, i) => {
                if (i === currentSlide) {
                    return (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.7}}
                            className='h-full w-full'

                        >
                            <img className='object-cover h-full w-full' src={el.img} alt="img" />
                        </motion.div>
                    )
                }
            })}
        </div>
    )
}
export default NewsOfferSlider