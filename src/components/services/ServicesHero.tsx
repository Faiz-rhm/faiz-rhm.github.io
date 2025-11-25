import { Title, Text, Container, Button, Box } from '@mantine/core';

interface ServicesHeroProps {
  onScheduleClick: () => void;
}

export default function ServicesHero({ onScheduleClick }: ServicesHeroProps) {
  return (
    <Container size="xl" style={{ textAlign: 'center', padding: '80px 20px 60px' }}>
      <Title
        order={1}
        style={{
          fontSize: '48px',
          fontWeight: '600',
          fontFamily: 'Manrope',
          background: 'linear-gradient(#F5F5F5, #8F8F8F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
        }}
      >
        Professional Flutter Development Services
      </Title>

      <Text
        size="xl"
        style={{
          color: '#E0E0E0',
          maxWidth: '700px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}
      >
        Transforming ideas into exceptional mobile experiences
      </Text>

      <Box>
        <Button
          size="lg"
          onClick={onScheduleClick}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            padding: '12px 40px',
            fontSize: '16px',
          }}
        >
          Schedule Free Consultation
        </Button>
      </Box>
    </Container>
  );
}
