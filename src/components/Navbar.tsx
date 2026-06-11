import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '../config';
import { assetUrl } from '../lib/assets';
import ThemeToggle from './ThemeToggle';

const MotionLink = motion.create(Link);

function navTarget(href: string) {
  if (href.startsWith('/')) return href;
  return { pathname: '/', hash: href.replace('#', '') };
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-floating container-main flex h-14 items-center justify-between rounded-2xl px-4 sm:px-5">
        <Link to="/" className="flex items-center gap-3">
          {navigationConfig.logoPath ? (
            <motion.img
              src={assetUrl(navigationConfig.logoPath)}
              alt={navigationConfig.brandName}
              className="h-8 w-auto max-w-[120px] object-contain object-left"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            />
          ) : (
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold shadow-sm"
              style={{ background: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              G
            </motion.div>
          )}
          <span className="text-sm font-semibold tracking-tight text-primary">{navigationConfig.brandName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationConfig.links.map((link, i) => (
            <MotionLink
              key={link.label}
              to={navTarget(link.href)}
              className="text-sm font-medium text-muted transition hover:text-primary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              {link.label}
            </MotionLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <MotionLink
            to={{ pathname: '/', hash: 'contact' }}
            className="btn-crm !py-2 !text-xs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Связаться
          </MotionLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button type="button" className="text-muted" onClick={() => setOpen(!open)} aria-label="Меню">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="container-main mt-2 overflow-hidden rounded-2xl border-theme bg-surface-elevated px-4 py-4 backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navigationConfig.links.map((link, i) => (
              <MotionLink
                key={link.label}
                to={navTarget(link.href)}
                className="block py-2.5 text-sm text-muted"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </MotionLink>
            ))}
            <Link to={{ pathname: '/', hash: 'contact' }} className="btn-crm mt-3 w-full" onClick={() => setOpen(false)}>
              Связаться
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
