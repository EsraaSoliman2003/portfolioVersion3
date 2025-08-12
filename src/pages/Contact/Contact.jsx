import React from "react";
import styles from "./Contact.module.css";
import { Mail, MapPin, Send } from "lucide-react";
import TypewriterText from "../../components/TypewriterText/TypewriterText";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/animations/contact.json";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TypewriterText text="Contact Me" />
        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <motion.div
              className={styles.animation}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Lottie className={styles.test} animationData={contactAnimation} loop={true} />
            </motion.div>
          </div>

          <motion.form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className={styles.form}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={styles.input}
              aria-label="Your Name"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className={styles.input}
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className={styles.textarea}
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              className={styles.button}
              aria-label="Send Message"
            >
              <Send className="w-5 h-5 mr-2" /> Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
