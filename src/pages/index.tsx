import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    #1 Baby Development App Ui Kit
                </Heading>
                <p className="hero__subtitle">
                    Baby Development App Ui Kit is developed and designed for Developer using React Native.
                    Baby Development Kit Saves your 200+ hours work and quick start your project in apps like
                </p>

                {/* Banner Images*/}
                <div>
                    <img className="img-fluid mobile-screen" src="https://landing.pixelstrap.net/reactnative/multikit/assets/images/screens/mobile-screen.png" alt="mobile-screen"/>
                </div>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
            <main>
                <HomepageFeatures/>
            </main>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
