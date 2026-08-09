export interface PolicySection {
  id: string;
  title: string;
  paragraphs: readonly string[];
}

export const privacyPolicy = {
  title: 'Privacy Policy',
  effectiveDate: '7 August 2026',
  sections: [
    {
      id: 'purpose',
      title: 'Purpose',
      paragraphs: [
        "This Privacy Policy explains how Dante Sports Management and Academy Ltd ('DANTE', 'we', 'our', 'us') collects, uses, stores, shares and protects personal information relating to players, parents or guardians, coaches, staff, volunteers, scouts, partners, sponsors and visitors.",
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      paragraphs: [
        'We may collect names, addresses, dates of birth, contact details, emergency contacts, identification documents, photographs, videos, medical and fitness information where necessary, payment information, educational information, football or boxing performance records, safeguarding records and website usage data.',
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Information',
      paragraphs: [
        'We use personal data for registrations, player development, competitions, safeguarding, communication, payments, legal compliance, insurance, medical emergencies, marketing where permitted, and improving our services.',
      ],
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis',
      paragraphs: [
        'Processing is based on consent where required, contractual necessity, legal obligations, protection of vital interests, and our legitimate interests in operating the academy.',
      ],
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      paragraphs: [
        "As many participants are minors, parental or guardian consent will be obtained where required. Children's data is handled with additional care and only for legitimate academy purposes.",
      ],
    },
    {
      id: 'sharing-information',
      title: 'Sharing Information',
      paragraphs: [
        'Information may be shared with football associations, boxing bodies, FIFA systems, medical professionals, insurers, schools, government authorities, or trusted service providers where legally required or necessary.',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      paragraphs: [
        'We implement administrative, technical and physical safeguards to protect personal information against unauthorised access, loss, misuse or disclosure.',
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      paragraphs: [
        'Personal information is retained only for as long as necessary to fulfil legal, sporting, safeguarding, financial and operational obligations.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      paragraphs: [
        'Subject to applicable law, individuals may request access, correction, deletion, restriction of processing, withdrawal of consent where applicable, and may lodge complaints with the relevant data protection authority.',
      ],
    },
    {
      id: 'website-and-cookies',
      title: 'Website & Cookies',
      paragraphs: [
        'Our website may use cookies and analytics to improve functionality. Users may manage cookies through their browser settings.',
      ],
    },
    {
      id: 'media-consent',
      title: 'Media Consent',
      paragraphs: [
        'Photos and videos may be used for academy promotion only where appropriate consent has been obtained.',
      ],
    },
    {
      id: 'international-transfers',
      title: 'International Transfers',
      paragraphs: [
        'Where information is transferred internationally, including FIFA Connect or international football transfers, appropriate safeguards will be applied in accordance with applicable laws.',
      ],
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      paragraphs: [
        'This policy may be updated periodically. The latest version will be published by the Academy.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      paragraphs: [],
    },
    {
      id: 'acknowledgement',
      title: 'Acknowledgement',
      paragraphs: [
        'By registering with Dante Sports Management and Academy Ltd, participants and/or their parent or legal guardian acknowledge that they have read and understood this Privacy Policy.',
      ],
    },
  ] satisfies readonly PolicySection[],
} as const;

export const photographyMediaPolicy = {
  title: 'Photography & Media Policy',
  effectiveDate: 'Upon publication',
  lastUpdated: 'August 2026',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      paragraphs: [
        'Dante Sports Management and Academy Ltd is committed to protecting the privacy, dignity and safety of every player, parent, coach, volunteer and visitor. This Photography and Media Policy explains how photographs and videos are collected, used and protected when taken during academy activities.',
      ],
    },
    {
      id: 'why-we-use-photographs-and-videos',
      title: 'Why We Use Photographs and Videos',
      paragraphs: [
        'We may use photographs and videos to promote our programmes, celebrate player achievements, report academy activities, showcase training sessions and competitions, communicate with partners and sponsors, and provide information about DANTE on our official website.',
      ],
    },
    {
      id: 'consent',
      title: 'Consent',
      paragraphs: [
        'Where required by law or academy policy, photographs and videos of players, particularly minors, are only published after appropriate consent has been obtained from the player or a parent or legal guardian.',
      ],
    },
    {
      id: 'how-images-may-be-used',
      title: 'How Images May Be Used',
      paragraphs: [
        'Approved photographs and videos may appear on the official DANTE website, academy news articles, event reports, galleries and other official website content.',
      ],
    },
    {
      id: 'protection-of-children',
      title: 'Protection of Children',
      paragraphs: [
        "DANTE will never intentionally publish sensitive personal information alongside a child's photograph. We avoid information that could place a child at risk, including home addresses, personal contact details, school schedules or other confidential information.",
      ],
    },
    {
      id: 'removal-requests',
      title: 'Removal Requests',
      paragraphs: [
        'If you believe an image has been published without the appropriate permission, or if you wish to withdraw previously granted consent, please contact DANTE. We will review the request promptly and remove the content where appropriate.',
      ],
    },
    {
      id: 'third-party-use',
      title: 'Third-Party Use',
      paragraphs: [
        'Images displayed on this website remain the property of DANTE or the respective copyright holder. They may not be copied, reproduced, downloaded or used for commercial purposes without prior written permission.',
      ],
    },
    {
      id: 'changes-to-this-policy',
      title: 'Changes to this Policy',
      paragraphs: [
        'DANTE may update this policy from time to time. Any changes will be published on this page with the updated revision date.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      paragraphs: [
        'For questions regarding this Photography and Media Policy or to request the removal of photographs or videos, please contact Dante Sports Management and Academy Ltd using the contact details published on this website.',
      ],
    },
  ] satisfies readonly PolicySection[],
} as const;

export const policyLinks = [
  { label: 'Safeguarding & Child Protection', href: '/safeguarding/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Photography & Media', href: '/photography-media/' },
] as const;
