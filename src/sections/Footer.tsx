import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { footerConfig, navigationConfig, contactConfig } from '../config';

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-theme py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-main flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link to="/" className="text-sm font-bold text-primary">{navigationConfig.brandName}</Link>
        <motion.a
          href={contactConfig.channels[0].href}
          className="text-sm text-muted"
          whileHover={{ scale: 1.03 }}
        >
          {contactConfig.channels[0].value}
        </motion.a>
        <p className="text-xs text-faint">{footerConfig.copyrightText}</p>
      </div>
    </motion.footer>
  );
}
