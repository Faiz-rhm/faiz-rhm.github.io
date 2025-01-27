import React from 'react';
import { Button, Container, Group, Space, Text } from '@mantine/core'; // Assuming Mantine library

const AppPreviewBottomCard = ({ title, sourceCodeUrl, previewUrl }) => {
  return (
    <Container size="xl">
      <div
        style={{
          margin: '0 auto',
          padding: '50px',
          backgroundColor: '#171717', // Replace with your desired color
          borderRadius: '8px', // Optional: For rounded corners
          textAlign: 'center', // Ensures everything inside is centered horizontally
        }}
      >
        {/* Text */}
        <Text
          style={{
            fontSize: '64px',
            fontWeight: '400',
            fontFamily: 'Manrope',
            background: 'linear-gradient(#F5F5F5, #8F8F8F)', // Gradient background
            WebkitBackgroundClip: 'text', // Clips background to text
            backgroundClip: 'text', // Ensures compatibility
            WebkitTextFillColor: 'transparent', // Makes the text transparent to show gradient
            maxWidth: '1000px', // Limit text width
            margin: '0 auto',
            marginBottom: '24px', // Space between text and buttons
            lineHeight: '1.2', // Adjust line height for better readability
          }}
        >
          {title}
        </Text>

        <Space h={20} />

        {/* Buttons */}
        <Group style={{ gap: '16px', justifyContent: 'center' }}>
          <Button
            variant="default"
            onClick={() => {
              window.open(sourceCodeUrl, '_blank', 'noopener,noreferrer'); // Open in new tab with secure attributes
            }}
            style={{
              background: '#FFFFFF',
              height: '56px',
              borderRadius: '12px',
              color: '#000000',
              fontFamily: 'Manrope',
              fontSize: '16px',
              padding: '0 24px',
              fontWeight: '600',
            }}
          >
            Source Code
          </Button>

          {/* Preview Button */}
          <Button
            variant="default"
            onClick={() => {
              window.open(previewUrl, '_blank', 'noopener,noreferrer'); // Open in new tab with secure attributes
            }}
            style={{
              background: '#171717',
              height: '56px',
              borderRadius: '12px',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontFamily: 'Manrope',
              fontSize: '16px',
              padding: '0 24px',
              fontWeight: '600',
            }}
          >
            Preview
          </Button>
        </Group>
      </div>
    </Container>
  );
};

export default AppPreviewBottomCard;
