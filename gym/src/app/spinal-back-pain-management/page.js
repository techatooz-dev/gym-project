import React from 'react'
import styles from './page.module.css'
import { FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiMuscleUp } from "react-icons/gi";
function SpinalPainManagement() {
  const treatments = [
    {
      id: 1,
      title: "Posture Correction",
      description: "Expert guidance for proper spinal alignment",
      icon: <FaStar className='text-[#76c043] text-[20px] mb-2'/>
    },
    {
      id: 2,
      title: "EMS Therapy",
      description: "Advanced electrical muscle stimulation",
      icon: <AiFillThunderbolt className='text-[#76c043] text-[20px] mb-2'/>
    },
    {
      id: 3,
      title: "Core Strengthening",
      description: "Targeted exercises for spinal support",
      icon: <GiMuscleUp className='text-[#76c043] text-[20px] mb-2'/>
    }
  ];

  return (
    <div>
      <section className={styles.splitHero}>
        <div className={styles.heroLeft}>
          <h1>Spinal Back Pain</h1>
          <span className={styles.accentText}>Management & Relief</span>
        </div>
        <div className={styles.heroRight}>
          <p>Advanced solutions for chronic back pain using innovative techniques</p>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.expertiseSection}>
          <h2>Our Expertise in Back Pain Management</h2>
          <div className={styles.expertiseGrid}>
            {treatments.map((item) => (
              <div key={item.id} className={styles.expertiseCard}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsContent}>
            <h2 className='text-[30px] font-bold text-center'>Comprehensive Care Approach</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <h3>01</h3>
                <p>Professional Assessment</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>02</h3>
                <p>Customized Treatment Plan</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>03</h3>
                <p>Regular Progress Monitoring</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaContainer}>
          <div className={styles.ctaBox}>
            <h2>Ready to Address Your Back Pain?</h2>
            <p>Schedule a consultation with our spine specialists</p>
            <button className={styles.ctaButton}>
              Book Your Session
              <span className={styles.arrowIcon}>→</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SpinalPainManagement

