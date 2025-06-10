import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const FeatureCard = ({image, title, description, delay = "2s", animate = false}) => (
    <div
        className={`mt-6 max-w-md mx-auto md:mx-0 ${
            animate ? `animate__animated animate__fadeIn animate__delay-${delay}` : "opacity-0"
        }`}
    >
        <div className="flex items-start bg-white rounded-lg shadow-lg p-4">
            {/*{image && <img*/}
            {/*    className="w-16 h-16 mr-4 object-contain"*/}
            {/*    src={useBaseUrl(image)}*/}
            {/*    alt={title}*/}
            {/*/>}*/}
            <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    </div>
);

function LandingSection() {
    return (
        <header
            id="screens"
            className="hero bg-cover bg-center pb-[300px]"
            style={{
                backgroundImage: `url(${useBaseUrl('img/bgImg.webp')})`,
                backgroundColor: "#f4f6f6",
            }}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
                {/* Left section */}
                <div className="md:w-1/2 text-center md:text-left animate__animated animate__fadeInLeft">
                    <Heading
                        as="h1"
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInUp"
                    >
                        The World’s #1
                    </Heading>
                    <Heading as="h1"
                             className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                        Baby Development UI Kit
                    </Heading>
                    <p className="text-xl text-white mb-6 max-w-lg mx-auto md:mx-0 animate__animated animate__fadeInUp animate__delay-2s">
                        Transform your app vision into reality with 50+ pre-built components.
                        Save 200+ hours and captivate parents with stunning designs!
                    </p>

                    {/* Buttons */}
                    <div
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate__animated animate__fadeInUp animate__delay-2s">
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="https://codecanyon.net/item/babycare-ui-kit-react-native-baby-development-template/58326074?srsltid=AfmBOoqcNICDhyS1wElRQVnf0zyI6BNcDbxpGD36wD9xPPe1hR7UfmmX"
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

                    {/* Feature Cards */}
                    <FeatureCard
                        image="/img/home_1.webp"
                        title="Daily Activity Overview"
                        description="Encourage healthy development with daily milestone goals."
                        delay="2s"
                        animate={true}
                    />

                    <FeatureCard
                        image="/img/home_2.webp"
                        title="Milestone Tracker Dashboard"
                        description="Monitor developmental progress across key skill areas."
                        delay="2s"
                        animate={true}
                    />

                    <FeatureCard
                        image="/img/home_2.webp"
                        title="Redux Seamless State Management"
                        description="Leverage Zustand with Redux support for efficient global state setup."
                        delay="2s"
                        animate={true}
                    />

                </div>
                {/* Right section image */}
                <div
                    className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeInRight animate__delay-1s slow-bounce">
                    <img
                        className="rounded-lg z-10"
                        src={useBaseUrl("/img/landing_screens.webp")}
                        alt="Home Screen 01"
                        loading="lazy"
                    />
                </div>
            </div>
        </header>
    );
}

function ActivitySection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="activities" className="bg-[#f4f6f6] py-16" ref={ref}>
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                {/* Left Image */}
                <div
                    className={`md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__delay-1s`}>
                    <img
                        className="rounded-lg z-10"
                        src={useBaseUrl("/img/activities_screen.webp")}
                        loading="lazy"
                        alt="Activities Screen"
                    />
                </div>

                {/* Right Text Content */}
                <div
                    className={`md:w-1/2 md:pl-10 text-center md:text-left ${inView ? "animate__animated animate__fadeInRight animate__delay-1s" : "opacity-0"}`}>
                    <Heading
                        as="h1"
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
                    >
                        Play With Purpose | Activities Section
                    </Heading>
                    <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Discover expert-designed activities that spark learning and development through play. From motor
                        skills to speech and cognition—each activity is tailored to your child’s age and stage. Try
                        three per day and watch your little one grow, giggle, and thrive!
                    </p>

                    {/* Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6 ${inView ? "animate__animated animate__fadeInUp animate__delay-2s" : "opacity-0"}`}>
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="https://codecanyon.net/item/babycare-ui-kit-react-native-baby-development-template/58326074?srsltid=AfmBOoqcNICDhyS1wElRQVnf0zyI6BNcDbxpGD36wD9xPPe1hR7UfmmX"
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

                    {/* Feature Cards */}
                    <FeatureCard
                        image="/img/activities.webp"
                        title="Skill-Based Activity Library"
                        description="Explore curated activities by developmental domains. Browse a categorized list of engaging activities (e.g., Gross Motor, Cognitive, Speech) tailored to the child’s age, with quick insights into levels and popularity."
                        delay="2s"
                        animate={inView}
                    />
                    <FeatureCard
                        image="/img/activity_details.webp"
                        title="Activity Guide & Tools"
                        description="Get step-by-step guidance for each activity. View the objective, detailed description, targeted milestones, and recommended toys or tools to support your child’s learning and engagement."
                        delay="3s"
                        animate={inView}
                    />
                </div>
            </div>
        </section>
    );
}

function FeedSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="feeds" className="bg-[#f4f6f6] py-16" ref={ref}>
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                {/* Left Text */}
                <div
                    className={`md:w-1/2 text-center md:text-left md:mr-10 ${inView ? "animate__animated animate__fadeInLeft animate__delay-1s" : "opacity-0"}`}>
                    <Heading
                        as="h1"
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
                    >
                        Parenting, Simplified | Feed Section
                    </Heading>
                    <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Your personalized parenting hub—filled with bite-sized tips, research-backed insights, and short
                        videos your baby will love. Scroll through daily posts that guide you in nurturing your child's
                        growth, one helpful tip at a time.
                    </p>

                    {/* Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6 ${inView ? "animate__animated animate__fadeInUp animate__delay-2s" : "opacity-0"}`}>
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="https://codecanyon.net/item/babycare-ui-kit-react-native-baby-development-template/58326074?srsltid=AfmBOoqcNICDhyS1wElRQVnf0zyI6BNcDbxpGD36wD9xPPe1hR7UfmmX"
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

                    {/* Feature Cards */}
                    <FeatureCard
                        image="/img/image_feed.webp"
                        title="Parenting Insights Feed"
                        description="Scroll through tips, stories, and growth ideas. Image-based feed with short titles, subtitles, and easy share/save options—perfect for parents to discover daily tips and knowledge on child development."
                        delay="2s"
                        animate={inView}
                    />
                    <FeatureCard
                        image="/img/feed_details.webp"
                        title="Deep Dive into Parenting Tips"
                        description="Expand on what you read—get full context. A detailed view with complete content about each feed post, offering in-depth parenting advice, activity ideas, and developmental guidance."
                        delay="3s"
                        animate={inView}
                    />
                    <FeatureCard
                        image="/img/video_feed.webp"
                        title="Shorts for Kids"
                        description="Fun, educational videos for little ones. A swipeable video feed where babies can watch short, age-appropriate videos with interactive features like like, comment, and share—just like YouTube Shorts."
                        delay="4s"
                        animate={inView}
                    />
                </div>

                {/* Right Image */}
                <div
                    className={`md:w-1/2 mt-10 md:mt-0 animate__animated animate__fadeInRight animate__delay-2s`}>
                    <img
                        className="rounded-lg z-10"
                        style={{width: "auto"}}
                        src={useBaseUrl("/img/feed_section.webp")}
                        loading="lazy"
                        alt="Feed Section"
                    />
                </div>
            </div>
        </section>
    );
}

function ChildManagementSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="child-management" className="bg-[#f4f6f6] py-16" ref={ref}>
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 section-container">
                {/* Left Image */}
                <div
                    className={`md:w-1/2 mb-10 md:mb-0 ${inView ? "animate__animated animate__fadeInLeft animate__delay-1s" : "opacity-0"}`}>
                    <img
                        className="rounded-lg z-10"
                        src={useBaseUrl("/img/child_management.webp")}
                        loading="lazy"
                        alt="Child Management"
                    />
                </div>

                {/* Right Text */}
                <div
                    className={`md:w-1/2 md:pl-10 text-center md:text-left ${inView ? "animate__animated animate__fadeInRight animate__delay-1s" : "opacity-0"}`}>
                    <Heading as="h1" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Child Management
                    </Heading>
                    <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Keep track of multiple children effortlessly—switch between profiles, track individual progress,
                        and personalize activities.
                    </p>

                    {/* Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6 ${inView ? "animate__animated animate__fadeInUp animate__delay-2s" : "opacity-0"}`}>
                        <Link
                            className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0] transition-colors"
                            to="https://codecanyon.net/item/babycare-ui-kit-react-native-baby-development-template/58326074?srsltid=AfmBOoqcNICDhyS1wElRQVnf0zyI6BNcDbxpGD36wD9xPPe1hR7UfmmX"
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

                    {/* Feature Cards */}
                    <FeatureCard
                        image="/img/child_listing.webp"
                        title="Your Children at a Glance"
                        description="View all added children in one place. Switch between children with a tap to get tailored activities, progress, and feeds for each child."
                        delay="2s"
                        animate={inView}
                    />
                    <FeatureCard
                        image="/img/child_add.webp"
                        title="Add a New Star to Your Galaxy"
                        description="Easily add a new child by entering age, name, and photo. This helps personalize the app experience—ensuring activities, milestones, and suggestions match your child's exact development stage."
                        delay="3s"
                        animate={inView}
                    />
                </div>
            </div>
        </section>
    );
}

function IntroSliders() {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0});

    return (
        <section id="onboarding" className="bg-[#f4f6f6] py-12">
            <div ref={ref}
                 className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between section-container">
                <motion.div
                    initial={{opacity: 0, x: -60}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 mr-10 text-center md:text-left"
                >
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                        Welcome to Smarter Parenting
                    </Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Join thousands of parents using AI-powered guidance to support their child’s development...
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-6">
                        <Link className="bg-[#50BEE9] text-white px-6 py-3 rounded-lg hover:bg-[#3ea8d0]" to="/">Buy
                            Now</Link>
                        <Link className="bg-[#EE8FC8] text-white px-6 py-3 rounded-lg hover:bg-[#d67eb4]"
                              to="/docs/intro">Explore Tutorial - 5min ⏱️</Link>
                    </div>
                    {[
                        {
                            img: "/img/slider1.webp",
                            title: "Parenting Expert in Your Pocket",
                            text: "Get daily guidance and trusted tips from child development experts..."
                        },
                        {
                            img: "/img/slider2.webp",
                            title: "Support Development with AI",
                            text: "Unlock AI-powered activity recommendations tailored to your child's age..."
                        },
                        {
                            img: "/img/slider3.webp",
                            title: "Smart Parenting, Made Easy",
                            text: "Navigate parenting with confidence with personalized support."
                        }
                    ].map(({img, title, text}, idx) => (
                        <FeatureCard
                            image={img}
                            title={title}
                            description={text}
                            delay="2s"
                            animate={true}
                        />
                    ))}
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 60}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2"
                >
                    <img className="rounded-lg bounce-rotate" src={useBaseUrl("/img/intro_sliders_screen.webp")}
                         loading="lazy"
                         alt="Intro Sliders Screen"/>
                </motion.div>
            </div>
        </section>
    );
}

function UIComponentSections() {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0});

    return (
        <section id="components" className="bg-[#f4f6f6] py-12">
            <div ref={ref}
                 className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between section-container">
                <motion.div
                    initial={{opacity: 0, x: -60}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 mb-8 md:mb-0"
                >
                    <img className="rounded-lg bounce-rotate" src={useBaseUrl("/img/ui_components.webp")}
                         loading="lazy"
                         alt="UI Components"/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 60}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 ml-10 text-center md:text-left"
                >
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">50+ Ready-to-Use
                        UI Components</Heading>
                    <p className="text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                        Build faster with beautifully crafted, developer-friendly components...
                    </p>
                    {[
                        "Accordions, Collapses, and Tabs for organized content",
                        "Avatars, Cards, and Skeletons to bring your app to life",
                        "Progress Bars and Charts for baby milestones",
                        "FlatLists, ScrollViews, and Bottom Sheets for smooth navigation",
                        "Forms with validation, pickers, dropdowns, and side menus"
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-center bg-white rounded-lg shadow-lg p-4 mb-2">
                            <p className="text-sm text-gray-600">{text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function HireUs() {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0});

    return (
        <section id="hire-us" className="bg-[#f4f6f6] py-12">
            <div ref={ref}>
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.8}}
                >
                    <Heading as="h2" className="text-4xl font-bold text-center mb-6">Collaborate with Us</Heading>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
                        Whether you're looking to build your own AI-powered baby development app or want to support our
                        ecosystem...
                    </p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={inView ? {opacity: 1} : {}}
                    transition={{delay: 0.2, duration: 0.8}}
                    className="container grid md:grid-cols-2 gap-6"
                >
                    {/* Hire Us Card */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold mb-2">Hire Us</h3>
                        <p className="text-gray-600 mb-4">
                            We build scalable React Native apps and full-stack development solutions.
                        </p>
                        <a href="https://wa.me/923167852626" target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
                            <FaWhatsapp/> Start WhatsApp Chat
                        </a>
                    </div>

                    {/* Invest Card */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold mb-2">Fund or Invest</h3>
                        <p className="text-gray-600 mb-4">
                            We’re building the future of parenting with AI. Join us as a backer or investor.
                        </p>
                        <a href="mailto:kodbex.com@gmail.com"
                           className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
                            <FaEnvelope/> Send an Email
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="landing-page o">
            <Layout>
                <LandingSection/>
                <ActivitySection/>
                <FeedSection/>
                <ChildManagementSection/>
                <IntroSliders/>
                <UIComponentSections/>
                <HireUs/>
            </Layout>
        </div>
    );
}