import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const fullUrl = window.location.href; 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview', 
      page_path: fullUrl,
    });
    document.title = `Page - ${fullUrl}`;
  }, [location]);

  return null;
};

export default PageViewTracker;
