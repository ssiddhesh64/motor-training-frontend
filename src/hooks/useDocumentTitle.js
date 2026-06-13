import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Royal Motor Training School | Best Driving School in Malad, Mumbai',
      '/services': 'Services & Fees | Royal Motor Training School',
      '/how-it-works': 'How It Works | Royal Motor Training School',
      '/documents':
        'Required Documents Checklist | Royal Motor Training School',
      '/faq': 'Frequently Asked Questions | Royal Motor Training School',
      '/gallery': 'Gallery & RTO Road Signs | Royal Motor Training School',
      '/contact': 'Contact Us & Map Location | Royal Motor Training School',
      '/mocktest':
        'Free RTO Learner’s Licence Mock Test | Royal Motor Training School',
    };

    document.title =
      routeTitles[location.pathname] || 'Royal Motor Training School';
  }, [location.pathname]);
}
