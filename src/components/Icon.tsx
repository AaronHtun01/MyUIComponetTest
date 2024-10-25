import { FC } from 'react';
import {
  EnvelopeIcon,
  BellAlertIcon,
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

type IconType = 'envelope' | 'bellalert' | 'bars3' | 'xmark' | 'globealt'; 

const icons: Record<IconType, FC<{ className?: string }>> = {
  envelope: EnvelopeIcon,
  bellalert: BellAlertIcon,
  bars3: Bars3Icon,
  xmark: XMarkIcon,
  globealt: GlobeAltIcon
};

interface IconProps {
  type: IconType;
  className?: string;
  size?: string;
}

const Icon: FC<IconProps> = ({ type, className, size = '6' }) => {
  const IconComponent = icons[type];
  return <IconComponent className={`${className} h-${size} w-${size}`} />;
};

export default Icon;
