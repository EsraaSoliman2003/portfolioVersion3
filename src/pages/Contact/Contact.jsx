import React from 'react';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-2 text-blue-600" />
          <p>Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a></p>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 mr-2 text-blue-600" />
          <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-blue-600" />
          <p>Location: Your City, Your Country</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;