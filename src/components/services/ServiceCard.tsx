'use client';

import { Card, Text, Button, Box } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { IconCode, IconPalette, IconUsers, IconComponents } from '@tabler/icons-react';

interface ServiceCardProps {
  name: string;
  description: string;
  keyPoints: string[];
  ctaText: string;
  ctaAction: 'modal' | 'projects' | 'market';
  icon: string;
  onScheduleClick?: () => void;
}

const iconMap = {
  'mobile-code': IconCode,
  'design-palette': IconPalette,
  'consultant': IconUsers,
  'components': IconComponents,
};

export default function ServiceCard({
  name,
  description,
  keyPoints,
  ctaText,
  ctaAction,
  icon,
  onScheduleClick,
}: ServiceCardProps) {
  const router = useRouter();
  const IconComponent = iconMap[icon as keyof typeof iconMap] || IconCode;

  const handleClick = () => {
    if (ctaAction === 'modal' && onScheduleClick) {
      onScheduleClick();
    } else if (ctaAction === 'projects') {
      router.push('/projects');
    } else if (ctaAction === 'market') {
      router.push('/market');
    }
  };

  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="lg"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box style={{ marginBottom: '20px' }}>
        <IconComponent size={48} stroke={1.5} style={{ color: '#F5F5F5' }} />
      </Box>

      <Text
        size="xl"
        fw={600}
        style={{
          color: '#F5F5F5',
          marginBottom: '16px',
          fontFamily: 'Manrope',
        }}
      >
        {name}
      </Text>

      <Text
        size="md"
        style={{
          color: '#E0E0E0',
          marginBottom: '20px',
          lineHeight: 1.6,
        }}
      >
        {description}
      </Text>

      <Box component="ul" style={{ marginBottom: '24px', paddingLeft: '20px' }}>
        {keyPoints.map((point, index) => (
          <Text
            key={index}
            component="li"
            size="sm"
            style={{
              color: '#B0B0B0',
              marginBottom: '8px',
            }}
          >
            {point}
          </Text>
        ))}
      </Box>

      <Box style={{ marginTop: 'auto' }}>
        <Button
          fullWidth
          size="md"
          onClick={handleClick}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
          }}
        >
          {ctaText}
        </Button>
      </Box>
    </Card>
  );
}
