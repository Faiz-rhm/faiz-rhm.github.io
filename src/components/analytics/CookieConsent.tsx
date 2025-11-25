'use client';

import CookieConsentBanner from 'react-cookie-consent';

export default function CookieConsent() {
  return (
    <CookieConsentBanner
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="ga-consent"
      enableDeclineButton
      style={{
        background: 'rgba(0, 0, 0, 0.95)',
        padding: '20px',
        alignItems: 'center',
      }}
      buttonStyle={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '14px',
        padding: '10px 30px',
        borderRadius: '8px',
        border: 'none',
      }}
      declineButtonStyle={{
        background: 'transparent',
        border: '1px solid #667eea',
        color: '#667eea',
        fontSize: '14px',
        padding: '10px 30px',
        borderRadius: '8px',
      }}
    >
      This website uses cookies to enhance the user experience and analyze site traffic.
    </CookieConsentBanner>
  );
}
