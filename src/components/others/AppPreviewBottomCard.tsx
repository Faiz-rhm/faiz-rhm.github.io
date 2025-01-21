import React from 'react';
import { Button, Container, Group, Text } from '@mantine/core'; // Assuming Mantine library

const AppPreviewBottomCard = () => {
  return (
    <Container size="xl">
        <div
        style={{
            margin: '0 auto',
            padding: '30px',
            backgroundColor: '#171717', // Replace with your desired color
            // border: '1px solid  rgba(255, 255, 255, 0.2)', // Replace with your desired border color and style
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
            Get the FlutterShop
        </Text>

        {/* Buttons */}
        <Group style={{ gap: '16px', justifyContent: 'center' }}>
            <Button
            variant="default"
            onClick={() => {}}
            style={{
                background: '#FFFFFF',
                height: '45px',
                borderRadius: '12px',
                color: '#000000',
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: '600',
            }}
            >
            Source Code
            </Button>

            <Button
            variant="default"
            style={{
                background: '#171717',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: '45px',
                borderRadius: '12px',
                color: '#FFFFFF',
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px', // Adjust space between icon and text
                padding: '0 24px', // Add padding for better button size
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
