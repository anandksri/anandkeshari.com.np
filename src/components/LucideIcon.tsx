import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  // Safe mapping of names to Lucide icons
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Elegant fallback icon
    return <Icons.Shield className={className} size={size} id={`fallback-icon-${name}`} />;
  }

  return <IconComponent className={className} size={size} id={`lucide-icon-${name}`} />;
}
