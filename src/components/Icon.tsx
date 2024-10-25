import { FC } from 'react';
import {
  EnvelopeIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';

// Define available icon types
type IconType = 'envelope' | 'bellalert'; 

// Map each type to an actual icon component
const icons: Record<IconType, FC<{ className?: string }>> = {
  envelope: EnvelopeIcon,
  bellalert: BellAlertIcon
  // Add more icons here
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
