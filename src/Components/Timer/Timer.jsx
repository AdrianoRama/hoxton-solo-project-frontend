import { motion } from 'framer-motion'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import './Timer.css'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00'
}

export default function Timer({ setAnnouncement }) {

    const countDate = new Date('April 6, 2022 18:44:00').getTime()
    const [stop, setStop] = useState(false)

    const [now, setNow] = useState(new Date().getTime())
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    let textDay = Math.floor(gap / day)

    let textHour = Math.floor((gap % day) / hour)

    let textMinute = Math.floor((gap % hour) / minute)

    let textSecond = Math.floor((gap % minute) / second)

    useEffect(() => {
        let interval = setInterval(() => {
            setNow(new Date().getTime())
        }, 1000)
    }, [])


    if (countDate < now) {
        setAnnouncement(true)
        return null
    } else
        return (
            <Fragment>
                <section className="timer-container">
                    <section className="timer">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="clock">
                            <section>
                                <p>{textDay}</p>
                                <small>Days</small>
                            </section>
                            <section>
                                <p>{textHour}</p>
                                <small>Hours</small>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{textMinute}</p>
                                <small>Minutes</small>
                            </section>
                            <span>:</span>
                            <section>
                                <p>{textSecond}</p>
                                <small>Seconds</small>
                            </section>
                        </motion.div>
                    </section>
                </section>
            </Fragment>
        )
}