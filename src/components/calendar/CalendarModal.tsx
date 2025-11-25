'use client';

import { useEffect } from 'react';
import { Modal, Box } from '@mantine/core';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Get Cal.com URL from environment variable
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL || 'https://cal.com';

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size="xl"
      title="Schedule Free Consultation"
      centered
      styles={{
        title: {
          fontSize: '24px',
          fontWeight: 600,
          fontFamily: 'Manrope',
        },
      }}
    >
      <Box style={{ minHeight: '600px' }}>
        <iframe
          src={calUrl}
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '8px',
          }}
          title="Schedule Consultation"
        />
      </Box>
    </Modal>
  );
}
