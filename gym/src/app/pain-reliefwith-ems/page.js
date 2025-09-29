import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { TbTargetArrow } from "react-icons/tb";
import { FcDataRecovery } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
function PainReliefEMS() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlighted}>Pain Relief</span> with 
            <br />EMS Technology
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the Future of <strong>Pain Management</strong> and 
            <br /><strong>Muscle Recovery</strong> Solutions
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Get Started Today</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Main Content */}
        <section className={styles.infoSection}>
          <div className={styles.sectionHeader}>
            <h2>Experience Advanced Pain Relief</h2>
            <div className={styles.underline}></div>
            <p className={styles.sectionSubtitle}>
              Transform your recovery process with cutting-edge EMS technology
            </p>
          </div>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}><TbTargetArrow /></span>
              </div>
              <h3>Targeted Pain Relief</h3>
              <p>Advanced precision technology for specific muscle groups</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}><FcDataRecovery /></span>
              </div>
              <h3>Fast Recovery</h3>
              <p>Scientifically proven electrical stimulation methods</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}><GrUserExpert /></span>
              </div>
              <h3>Expert Care</h3>
              <p>Personalized treatment by certified professionals</p>
            </div>
          </div>
        </section>

        <section className={styles.treatmentSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Treatment Approach</h2>
            <div className={styles.underline}></div>
          </div>
          
          <div className={styles.treatmentGrid}>
            {/*
              {
                title: "Pain Management",
                desc: "Comprehensive solutions for chronic conditions",
                icon: "🌟"
              },
              {
                title: "Athletic Performance",
                desc: "Enhanced recovery for peak performance",
                icon: "🏃‍♂️"
              },
              {
                title: "Rehabilitation",
                desc: "Customized recovery programs",
                icon: "💪"
              }
            */}
            {["Pain Management", "Athletic Performance", "Rehabilitation"].map((title, index) => (
              <div key={index} className={styles.treatmentItem}>
                <div className={styles.treatmentIcon}><FaStar /></div>
                <h3>{title}</h3>
                <p>{`Description for ${title}`}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Begin Your Transformation Today</h2>
            <p>Join our satisfied clients and experience the power of EMS therapy</p>
            <button className={styles.ctaButton}>
              Schedule Free Consultation
              <span className={styles.buttonArrow}>→</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PainReliefEMS
