import { Title, Text, Container } from '@mantine/core';

export default function ServicesHero() {
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
        What We Do Best
      </Title>

      <Text
        size="xl"
        style={{
          color: '#E0E0E0',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}
      >
        From concept to launch, we build digital products that drive results
      </Text>
    </Container>
  );
}
