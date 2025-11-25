'use client';

import { Card, Text, Box } from '@mantine/core';
import { IconCode, IconPalette, IconUsers, IconComponents } from '@tabler/icons-react';

interface ServiceCardProps {
  name: string;
  description: string;
  keyPoints: string[];
  icon: string;
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
  icon,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || IconCode;

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
    </Card>
  );
}
