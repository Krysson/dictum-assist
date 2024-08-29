// src/components/FooterLinks.jsx
import React from 'react';
import Link from 'next/link';

const FooterLinks = () => {
  const linkSections = [
    {
      title: 'dictumAI',
      links: [
        { name: 'Platform Overview', url: '/dictumAI/overview' },
        { name: 'Features', url: '/dictumAI/features' },
        { name: 'Integrations', url: '/dictumAI/integrations' },
        { name: 'Research', url: '/dictumAI/research' },
        { name: 'Stories', url: '/dictumAI/stories' },
        { name: 'Tutorials', url: '/dictumAI/tutorial' },
        { name: 'Pricing', url: '/dictumAI/pricing' }
      ]
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'Team', url: '/company/team' },
        { name: 'Support', url: '/company/support' },
        { name: 'Careers', url: '/company/careers' },
        { name: 'Press', url: '/company/press' },
        { name: 'News', url: '/company/news' },
        { name: 'Contact', url: '/company/contact' },
        { name: 'Status', url: '/company/status' },
        { name: 'Availability', url: '/company/availability' }
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Blog', url: '/resources/blog' },
        { name: 'Newsletter', url: '/resources/newsletter' },
        { name: 'Community', url: '/resources/community' },
        { name: 'Events', url: '/resources/events' },
        { name: 'FAQs', url: '/resources/faq' },
        { name: 'Documentation', url: '/resources/documentation' },
        { name: 'For Developers', url: '/resources/forDevs' }
      ]
    },
    {
      title: 'LEGAL',
      links: [
        { name: 'Terms of Use', url: '/legal/termsUse' },
        { name: 'Terms of Service', url: '/legal/termsService' },
        { name: 'Privacy Policy', url: '/legal/privacy' },
        { name: 'Usage Policy', url: '/legal/usage' },
        { name: 'Responsible Disclosure Policy', url: '/legal/rdp' },
        { name: 'Compliance', url: '/legal/compliance' }
      ]
    }
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2  w-full '>
      {linkSections.map((section, index) => (
        <div key={index}>
          <h3 className='text-md font-semibold text-gray-400  mb-4'>{section.title}</h3>
          <ul>
            {section.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className='mb-2'>
                <Link
                  href={link.url}
                  className='text-sm antialiased text-gray-200 hover:text-gray-200/75 '>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
