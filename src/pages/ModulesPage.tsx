import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ParallaxField from '../components/ParallaxField';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import FacilitiesGrid from '../components/FacilitiesGrid';
import { facilitiesConfig, navigationConfig } from '../config';

export default function ModulesPage() {
  return (
    <div className="min-h-screen">
      <ParallaxField />
      <Navbar />
      <main className="section-pad pt-4">
        <div className="container-main">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-primary"
          >
            <ArrowLeft size={16} />
            На главную
          </Link>

          <p className="section-label">{facilitiesConfig.sectionLabel}</p>
          <h1 className="section-title mt-3">
            Всё, что нужно директору — без доплат за «модули»
          </h1>
          <p className="section-desc max-w-2xl">
            {navigationConfig.brandName}: финансы, ученики, CRM и склад. Нажмите модуль — откроется
            описание и полноразмерный скрин интерфейса.
          </p>

          <div className="mt-10">
            <FacilitiesGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
