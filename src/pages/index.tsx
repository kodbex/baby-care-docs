import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function LandingSection() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header
            className="hero bg-cover bg-center"
            style={{
                backgroundImage: `url('http://localhost:3000/baby-care-docs/img/bgImg.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#f4f6f6',
                paddingBottom: '300px',
                // minHeight: '1080px',
                // padding: "0rem 5rem",
            }}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        The World’s #1
                    </Heading>
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Baby Development UI Kit
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Transform your app vision into reality with 50+ pre-built components. Save 200+ hours and
                        captivate parents with stunning designs!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="/buy"
                        >
                            Buy Now
                        </Link>
                        <Link
                            className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4] transition-colors"
                            to="/docs/intro"
                        >
                            Explore Tutorial - 5min ⏱️
                        </Link>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        className="rounded-lg z-10 bounce-rotate"
                        src={useBaseUrl("/img/landing_screens.png")}
                        alt="Home Screen 01"
                    />
                </div>
            </div>
        </header>
    );
}

function ActivitySection() {
    return (
        <section className="bg-[#f4f6f6]">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img className="rounded-lg z-10 bounce-rotate"
                         src={useBaseUrl("/img/activities_screen.png")}
                         alt="Home Screen 01"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Activity Section
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Transform your app vision into reality with 50+ pre-built components. Save 200+ hours and
                        captivate parents with stunning designs!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="/buy">
                            Buy Now
                        </Link>
                        <Link
                            className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4] transition-colors"
                            to="/docs/intro">
                            Explore Tutorial - 5min ⏱️
                        </Link>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

function FeedSection() {
    return (
        <section className="bg-[#f4f6f6]">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Feed Section
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Transform your app vision into reality with 50+ pre-built components. Save 200+ hours and
                        captivate parents with stunning designs!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="/buy"
                        >
                            Buy Now
                        </Link>
                        <Link
                            className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4] transition-colors"
                            to="/docs/intro"
                        >
                            Explore Tutorial - 5min ⏱️
                        </Link>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img className="rounded-lg z-10 bounce-rotate"
                         style={{
                             width: 'auto',
                         }}
                         src={useBaseUrl("/img/feed_section.png")}
                         alt="Home Screen 01"
                    />
                </div>
            </div>
        </section>
    );
}

function ChildManagementSection() {
    return (
        <section className="bg-[#f4f6f6]" style={{}}>
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                <div className="md:w-1/2 mb-8 md:mb-0" style={{}}>
                    <img className="rounded-lg  z-10 bounce-rotate"
                         src={useBaseUrl("/img/child_management.png")}
                         alt="Child Management"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Child Management
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Transform your app vision into reality with 50+ pre-built components. Save 200+ hours and
                        captivate parents with stunning designs!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="/buy"
                        >
                            Buy Now
                        </Link>
                        <Link
                            className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4] transition-colors"
                            to="/docs/intro"
                        >
                            Explore Tutorial - 5min ⏱️
                        </Link>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function IntroSliders() {
    return (
        <section className="bg-[#f4f6f6]">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        OnBoarding Section
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Transform your app vision into reality with 50+ pre-built components. Save 200+ hours and
                        captivate parents with stunning designs!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="/buy"
                        >
                            Buy Now
                        </Link>
                        <Link
                            className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4] transition-colors"
                            to="/docs/intro"
                        >
                            Explore Tutorial - 5min ⏱️
                        </Link>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img className="rounded-lg z-10 bounce-rotate"
                         src={useBaseUrl("/img/intro_sliders_screen.png")}
                         alt="Home Screen 01"
                    />
                </div>
            </div>
        </section>
    );
}

function UIComponentSections() {
    return (
        <section className="bg-[#f4f6f6]" style={{}}>
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                <div className="md:w-1/2 mb-8 md:mb-0" style={{}}>
                    <img className="rounded-lg z-10 bounce-rotate"
                         src={useBaseUrl("/img/ui_components.png")}
                         alt="Home Screen 01"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        UI Components
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Transform your app vision into reality with 50+ pre-built components. Save 200+ hours and
                        captivate parents with stunning designs!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="/buy"
                        >
                            Buy Now
                        </Link>
                        <Link
                            className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4] transition-colors"
                            to="/docs/intro"
                        >
                            Explore Tutorial - 5min ⏱️
                        </Link>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Launch in Hours, Not Weeks</h3>
                                <p className="text-sm text-gray-600">
                                    Our UI Kit lets you focus on what matters—building a delightful app for parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default function Home() {
    return (
        <Layout
            title="Baby Development App UI Kit | Build Faster with React Native"
            description="Discover the #1 React Native UI Kit for baby development apps with stunning home screens."
        >
            <LandingSection/>
            <ActivitySection/>
            <FeedSection/>
            <ChildManagementSection/>
            <IntroSliders/>
            <UIComponentSections/>
        </Layout>
    );
}