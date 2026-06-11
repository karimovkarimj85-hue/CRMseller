import {
  Wallet,
  Users,
  GraduationCap,
  Package,
  TrendingUp,
  Calendar,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  finances: Wallet,
  personnel: Users,
  students: GraduationCap,
  inventory: Package,
  deals: TrendingUp,
  schedule: Calendar,
};

interface ModuleIconProps {
  slug: string;
  size?: number;
  className?: string;
}

export default function ModuleIcon({ slug, size = 24, className = '' }: ModuleIconProps) {
  const Icon = ICONS[slug] ?? Package;
  return <Icon size={size} className={className} strokeWidth={1.75} />;
}
