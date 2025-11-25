// Google Analytics event tracking helper functions

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: EventParams
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: EventParams
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Specific event tracking functions

export const trackScheduleConsultation = (source: string) => {
  trackEvent('schedule_consultation', { source });
};

export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', { service_name: serviceName });
};

export const trackViewUIKit = (kitName: string, kitSlug: string) => {
  trackEvent('view_ui_kit', { kit_name: kitName, kit_slug: kitSlug });
};

export const trackViewProject = (projectName: string, projectSlug: string) => {
  trackEvent('view_project', { project_name: projectName, project_slug: projectSlug });
};

export const trackCTAClick = (buttonText: string, location: string) => {
  trackEvent('cta_click', { button_text: buttonText, location });
};
