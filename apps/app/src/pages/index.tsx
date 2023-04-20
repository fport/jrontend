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
                    <div className={styles.command}>
                        <span>npx @jrontends/core@latest</span>
                        <CopyToClipboard text="npx @jrontends/core@latest" onCopy={handleCopyClick}>
                            <button className={styles.copyButton}>
                                {isCopied ? 'Copied!' : 'Copy'} <span role="img" aria-label="copy">📋</span>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
