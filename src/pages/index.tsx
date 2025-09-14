import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    // const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Hi, I&apos;m Vedant!
                </Heading>
                <p className="hero__subtitle">
                    I&apos;m a Software Engineer with 10+ years of experience working across the .NET ecosystem.
                    I primarily work with C#, .NET, and ASP.NET Core Web APIs, SQL, NoSQL, Caching, and
                    multiple message buses, including Azure EventHub, AWS EventBridge, and RabbitMQ.
                    I’ve built and maintained monolithic and distributed systems.
                    <br></br>
                    <br></br>
                    My focus is to understand the business requirements and then apply the right design patterns and principles
                    to meet those requirements. This helps in producing clean, testable, and maintainable code and designing systems
                    that are reliable and easy to understand. Over the years, I’ve worked on a wide range of technical challenges
                    — improving backend performance, debugging memory and socket exhaustion issues, and helping teams deliver
                    business features in a timely manner.
                    <br></br>
                    <br></br>
                    This site is where I share what I’ve learned — through blogs, tutorials, and personal projects.
                    I hope you find something useful here!
                    <br></br>
                    If you would like to connect, message me via
                    {' '}<Link to='https://linkedin.com/in/phougatv'>LinkedIn</Link>{' '}
                    or
                    {' '}<Link to='https://x.com/phougatv'>X (formerly Twitter).</Link>{' '}
                    <br></br>
                </p>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
        </Layout>
    );
}
