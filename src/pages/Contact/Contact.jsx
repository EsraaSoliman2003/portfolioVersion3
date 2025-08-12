import React from "react";
import styles from "./Contact.module.css";
import TypewriterText from "../../components/TypewriterText/TypewriterText";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/animations/contact.json";
import doneanimation from "../../assets/animations/done.json";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgvzdozr");

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
              <Lottie
                className={styles.test}
                animationData={contactAnimation}
                loop={true}
                style={{ width: "100%", maxWidth: "450px", maxHeight: "450px" }}
              />
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
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
              disabled={state.submitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={styles.input}
              aria-label="Your Email"
              disabled={state.submitting}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className={styles.textarea}
              aria-label="Your Message"
              disabled={state.submitting}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              className={styles.button}
              aria-label="Send Message"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting..." : "Send"}
            </button>
            {state.succeeded && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Lottie
                  animationData={doneanimation}
                  style={{ height: 30, width: 30 }}
                  loop={false}
                />
                <span>done!</span>
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
