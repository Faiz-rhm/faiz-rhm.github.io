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
        background: '#FFFFFF',
        color: '#000000',
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: '600',
        height: '45px',
        padding: '0 30px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
      }}
      declineButtonStyle={{
        background: '#171717',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: '#FFFFFF',
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: '600',
        height: '45px',
        padding: '0 30px',
        borderRadius: '12px',
        cursor: 'pointer',
      }}
    >
      This website uses cookies to enhance the user experience and analyze site traffic.
    </CookieConsentBanner>
  );
}
