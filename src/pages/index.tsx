import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import {FaWhatsapp, FaEnvelope} from 'react-icons/fa';

function LandingSection() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header
            className="hero bg-cover bg-center"
            style={{
                backgroundImage: `url('http://localhost:3000/baby-care-docs/img/bgImg.png')`,
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
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                        The World’s #1
                    </Heading>
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[white]">
                        Baby Development UI Kit
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0 text-[white]">
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
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4 relative">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/home_1.png")}
                                alt="Baby Icon"
                                style={{
                                    objectFit: "contain",
                                    borderRadius: 10,
                                    border: "2px",
                                    position: "absolute",
                                    left: "10px",
                                    height: "120px"
                                }}
                            />
                            <div style={{
                                marginLeft: "80px"
                            }}>
                                <h3 className="text-lg font-semibold text-gray-900">Daily Activity Overview</h3>
                                <p className="text-sm text-gray-600">
                                    Encourage healthy development with daily milestone goals.
                                    Shows a snapshot of the child’s current activities and progress for the day, with
                                    interactive task buttons and activity status.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4 relative">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/home_2.png")}
                                alt="Baby Icon"
                                style={{
                                    objectFit: "contain",
                                    borderRadius: 10,
                                    border: "2px",
                                    position: "absolute",
                                    left: "10px",
                                    height: "120px"
                                }}
                            />
                            <div style={{
                                marginLeft: "80px"
                            }}>
                                <h3 className="text-lg font-semibold text-gray-900">Milestone Tracker Dashboard</h3>
                                <p className="text-sm text-gray-600">
                                    Monitor developmental progress across key skill areas.
                                    Displays detailed progress bars for domains like Gross Motor, Fine Motor, Speech,
                                    and more, helping parents visualize growth milestones by age.
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
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img className="rounded-lg z-10 bounce-rotate"
                         src={useBaseUrl("/img/activities_screen.png")}
                         alt="Home Screen 01"
                    />
                </div>
                <div className="md:w-1/2 ml-10 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Play With Purpose | Activities Section
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Discover expert-designed activities that spark learning and development through play.
                        From motor skills to speech and cognition—each activity is tailored to your child’s age and
                        stage. Try three per day and watch your little one grow, giggle, and thrive!
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
                                src={useBaseUrl("/img/activities.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Skill-Based Activity Library</h3>
                                <p className="text-sm text-gray-600">
                                    Explore curated activities by developmental domains.
                                    Browse a categorized list of engaging activities (e.g., Gross Motor, Cognitive,
                                    Speech) tailored to the child’s age, with quick insights into levels and popularity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/activity_details.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Activity Guide & Tools</h3>
                                <p className="text-sm text-gray-600">
                                    Get step-by-step guidance for each activity.
                                    View the objective, detailed description, targeted milestones, and recommended toys
                                    or tools to support your child’s learning and engagement.
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
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                <div className="md:w-1/2 text-center md:text-left mr-10">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Parenting, Simplified | Feed Section
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Your personalized parenting hub—filled with bite-sized tips, research-backed insights, and short
                        videos your baby will love.
                        Scroll through daily posts that guide you in nurturing your child's growth, one helpful tip at a
                        time.
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
                                src={useBaseUrl("/img/image_feed.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Parenting Insights Feed</h3>
                                <p className="text-sm text-gray-600">
                                    Scroll through tips, stories, and growth ideas.
                                    Image-based feed with short titles, subtitles, and easy share/save options—perfect
                                    for parents to discover daily tips and knowledge on child development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/feed_details.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Deep Dive into Parenting Tips</h3>
                                <p className="text-sm text-gray-600">
                                    Expand on what you read—get full context.
                                    A detailed view with complete content about each feed post, offering in-depth
                                    parenting advice, activity ideas, and developmental guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/video_feed.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Shorts for Kids</h3>
                                <p className="text-sm text-gray-600">
                                    Fun, educational videos for little ones.
                                    A swipeable video feed where babies can watch short, age-appropriate videos with
                                    interactive features like like, comment, and share—just like YouTube Shorts.
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
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                <div className="md:w-1/2 mb-8 md:mb-0" style={{}}>
                    <img className="rounded-lg  z-10 bounce-rotate"
                         src={useBaseUrl("/img/child_management.png")}
                         alt="Child Management"
                    />
                </div>
                <div className="md:w-1/2 ml-10 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Child Management
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Keep track of multiple children effortlessly—switch between profiles, track individual progress,
                        and personalize activities.
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
                                src={useBaseUrl("/img/child_listing.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Your Children at a Glance</h3>
                                <p className="text-sm text-gray-600">
                                    View all added children in one place.
                                    Switch between children with a tap to get tailored activities, progress, and feeds
                                    for each child.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/child_add.png")}
                                alt="Baby Icon"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Add a New Star to Your Galaxy</h3>
                                <p className="text-sm text-gray-600">
                                    Easily add a new child by entering age, name, and photo.
                                    This helps personalize the app experience—ensuring activities, milestones, and
                                    suggestions match your child's exact development stage.
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
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                <div className="md:w-1/2 mr-10 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        Welcome to Smarter Parenting
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Join thousands of parents using AI-powered guidance to support their child’s development.
                        From expert-backed activities to personalized insights—your parenting journey just got easier
                        and smarter.
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
                                src={useBaseUrl("/img/slider1.png")}
                                alt="Parenting Expert in Your Pocket"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Parenting Expert in Your Pocket</h3>
                                <p className="text-sm text-gray-600">
                                    Get daily guidance and trusted tips from child development experts—all in one place.
                                    Whether it’s playtime ideas or growth advice, we’ve got you covered anytime,
                                    anywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/slider2.png")}
                                alt="Support Development with AI"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Support Development with AI</h3>
                                <p className="text-sm text-gray-600">
                                    Unlock AI-powered activity recommendations tailored to your child's age and
                                    milestones. Help your baby grow with the right guidance, at the right time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <img
                                className="w-16 h-16 mr-4"
                                src={useBaseUrl("/img/slider3.png")}
                                alt="Smart Parenting, Made Easy"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Smart Parenting, Made Easy</h3>
                                <p className="text-sm text-gray-600">
                                    Navigate parenting with confidence. Our AI understands your child’s needs and
                                    delivers personalized support so you can focus on what matters most—your child’s
                                    happiness.
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
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                <div className="md:w-1/2 mb-8 md:mb-0" style={{}}>
                    <img className="rounded-lg z-10 bounce-rotate"
                         src={useBaseUrl("/img/ui_components.png")}
                         alt="Home Screen 01"
                    />
                </div>
                <div className="md:w-1/2 ml-10 text-center md:text-left">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-[#000]">
                        50+ Ready-to-Use UI Components
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Build faster with beautifully crafted, developer-friendly components—designed for real-world
                        parenting apps.
                        From collapsible accordions to interactive charts, dropdowns, and validated forms, each element
                        is built for performance and polish.
                    </p>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Save weeks of work with production-ready elements like:
                    </p>

                    <div className="flex items-center bg-white rounded-lg shadow-lg p-4 mb-2">
                        <div>
                            <p className="text-sm text-gray-600">
                                Accordions, Collapses, and Tabs for organized content
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded-lg shadow-lg p-4 mb-2">
                        <div>
                            <p className="text-sm text-gray-600">
                                Avatars, Cards, and Skeletons to bring your app to life
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded-lg shadow-lg p-4 mb-2">
                        <div>
                            <p className="text-sm text-gray-600">
                                Progress Bars and Charts for baby milestones
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded-lg shadow-lg p-4 mb-2">
                        <div>
                            <p className="text-sm text-gray-600">
                                FlatLists, ScrollViews, and Bottom Sheets for smooth navigation
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white rounded-lg shadow-lg p-4 mb-2">
                        <div>
                            <p className="text-sm text-gray-600">
                                Forms with validation, pickers, dropdowns, and side menus
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 max-w-md mx-auto md:mx-0">
                        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Seamless State Management Across the
                                    App</h3>
                                <p className="text-sm text-gray-600">
                                    Leverage Zustand with Redux support for a simple, scalable, and efficient global
                                    state setup—making data access and updates effortless throughout your app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

function HireUs() {
    return (
        <section className="bg-[#f4f6f6]" style={{}}>
            <Heading as="h2" className="text-4xl font-bold text-center mb-6">
                🚀 Collaborate with Us
            </Heading>
            <div className="container mb-20 z-10">
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
                    Whether you're looking to build your own AI-powered baby development app or want to support our
                    growing ecosystem—this is your chance to partner with a passionate and experienced team.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Hire Us */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold mb-2">Hire Us</h3>
                        <p className="text-gray-600 mb-4">
                            We build scalable React Native apps and full-stack baby development solutions—from backend
                            to beautiful UI. Get your custom app faster with our ready-to-use components.
                        </p>
                        <a href="https://wa.me/923167852626" target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
                            <FaWhatsapp/> Start WhatsApp Chat
                        </a>
                    </div>

                    {/* Invest With Us */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold mb-2">Fund or Invest</h3>
                        <p className="text-gray-600 mb-4">
                            We’re building the future of parenting with AI. Join us as a backer or investor to scale
                            this globally and impact millions of families.
                        </p>
                        <a href="mailto:hello@yourdomain.com"
                           className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
                            <FaEnvelope/> Send an Email
                        </a>
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
            <HireUs/>
        </Layout>
    );
}