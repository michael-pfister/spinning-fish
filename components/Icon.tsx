// components/Icon.tsx
import { Icon as IconifyIcon } from '@iconify-icon/react';

interface IconProps {
  icon: string; 
  size?: number; 
  color?: string; 
}

export default function Icon({ icon, size = 24, color, ...rest }: IconProps) {
  return (
    <IconifyIcon 
      icon={icon} 
      width={size} 
      height={size} 
      color={color} 
      {...rest} 
    />
  );
}
