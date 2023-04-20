import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Home: React.FC = () => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyClick = () => {
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }

    return (
        <>
            <Head>
                <title>Jrontend - Homepage</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className={styles.container}>
                <div className={styles.text}>JRONTEND</div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span>create</span>
                        <span>easy</span>
                        <span>micro-frontend</span>
                    </div>
                    <div>
                        <div className={styles.command}>
                            <span>npx @jrontends/core@latest</span>
                            <CopyToClipboard text='npx @jrontends/core@latest' onCopy={handleCopyClick}>
                                <button className={styles.copyButton}>
                                    {isCopied ? 'Copied!' : 'Copy'} <span role='img' aria-label='copy'>📋</span>
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className={styles.links}>
                            <a
                                className={styles.link}
                                href='https://github.com/kodizim/jrontend'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub 🪄
                            </a>
                            <a
                                className={styles.link}
                                href='https://www.npmjs.com/package/@jrontends/core'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                npm 📦
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
