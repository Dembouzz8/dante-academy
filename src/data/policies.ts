import { privacyLegalContact } from './contact';

export interface PolicySection {
  id: string;
  title: string;
  paragraphs: readonly string[];
}

export const privacyPolicy = {
  title: 'Privacy Policy',
  effectiveDate: '7 August 2026',
  registrationNumber: 'RC 9492050',
  sections: [
    {
      id: 'purpose',
      title: 'Purpose and Scope',
      paragraphs: [
        'DANTE SPORTS MANAGEMENT AND ACADEMY LTD ("DANTE", "we", "us" or "our"), RC 9492050, operates Dante Football Academy in Ibadan, Oyo State, Nigeria.',
        'This Privacy Policy explains how DANTE collects, uses, stores, shares and protects personal data relating to players, applicants, parents or legal guardians, coaches, staff, volunteers, partners, sponsors and visitors.',
        'DANTE processes personal data in accordance with the Nigeria Data Protection Act 2023 and other applicable Nigerian data-protection laws and regulatory requirements.',
      ],
    },
    {
      id: 'data-controller',
      title: 'Data Controller',
      paragraphs: [
        'DANTE SPORTS MANAGEMENT AND ACADEMY LTD, RC 9492050, Ibadan, Oyo State, Nigeria, is responsible for deciding how and why personal data covered by this Policy is processed.',
        'Questions, complaints and data-protection requests should be directed to DANTE using the privacy and data-protection contact details in this Policy.',
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Personal Data We May Collect',
      paragraphs: [
        'Depending on the activity and what is relevant, DANTE may collect identity and contact information; date of birth and age; parent or legal guardian information; addresses and emergency contacts; photographs and identification information where required; football history and playing position; assessments and performance information; education information where relevant; attendance and administrative or disciplinary records; payment and transaction information; photography, video and media consent records; and communications with DANTE.',
        'Where necessary, DANTE may also collect medical, health, injury, allergy, fitness, emergency and safeguarding information. These categories receive additional care because of their sensitive nature.',
        'Technical information associated with the use of online services or third-party forms may be processed where applicable. This does not mean that the current DANTE website operates analytics or cookie tracking.',
        'DANTE seeks to collect personal data that is adequate, relevant and necessary for the identified purpose.',
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'Why We Process Personal Data',
      paragraphs: [
        'DANTE may process personal data to assess applications; manage admission; administer participation, training and player development; communicate with players and families; support health, safety and welfare; meet safeguarding responsibilities; carry out academy and football administration; manage payments and records; organise programmes and events; respond to enquiries and complaints; meet legal or regulatory obligations; protect legitimate organisational or legal interests; and provide appropriate football-related communications.',
        "Photographs, video or other media may be processed for appropriate academy purposes only where a valid lawful basis applies and in accordance with DANTE's Photography & Media Policy.",
      ],
    },
    {
      id: 'legal-basis',
      title: 'Lawful Bases',
      paragraphs: [
        'DANTE identifies an appropriate lawful basis before processing personal data. Depending on the circumstances, this may include consent; contractual necessity or steps connected with a contract; compliance with a legal obligation; protection of vital interests; legitimate interests; or another lawful basis recognised under applicable Nigerian data-protection law.',
        'Where DANTE relies on consent, that consent may be withdrawn subject to applicable law. Registration or admission does not create blanket consent for every form of personal-data processing.',
      ],
    },
    {
      id: 'childrens-privacy',
      title: 'Children and Young Players',
      paragraphs: [
        "DANTE treats children's personal data with particular care and does not intentionally use it for unrelated purposes.",
        "Where the processing of a child's personal data requires consent, authorisation or parent or legal guardian involvement, DANTE will obtain the appropriate consent or authorisation from the child's parent, legal guardian or other person legally entitled to provide it, where applicable.",
        'DANTE may take reasonable steps to verify that a person providing consent or authorisation has the appropriate authority. Access to sensitive child, medical and safeguarding information is restricted to authorised persons who require it for a legitimate and lawful purpose.',
      ],
    },
    {
      id: 'medical-health-and-safeguarding',
      title: 'Medical, Health and Safeguarding Data',
      paragraphs: [
        'Medical, health, injury, allergy, fitness, emergency and safeguarding information is collected only where there is a legitimate and lawful need connected with participation, welfare, safety, safeguarding or academy administration.',
        'Access is appropriately restricted in view of the sensitive nature of the information. Such data is disclosed only where there is a lawful and relevant reason, including an appropriate medical, emergency, safeguarding or welfare purpose.',
      ],
    },
    {
      id: 'media-consent',
      title: 'Photography, Video and Media',
      paragraphs: [
        "Photography, video and media use is governed by DANTE's Photography & Media Policy and the lawful-basis requirements that apply to the particular use.",
        'Where consent is required, photography, video or media consent will be obtained separately from general registration or admission consent. Media consent is not automatically a condition of ordinary admission unless a particular use is genuinely necessary and lawful.',
        'Where media use is based on consent, the person who provided that consent may contact DANTE concerning withdrawal for future use, subject to applicable law and any lawful limitations.',
      ],
    },
    {
      id: 'sharing-information',
      title: 'Sharing Personal Data',
      paragraphs: [
        'DANTE may share personal data only where sharing is necessary, lawful and relevant to the purpose for which the information is being processed.',
        'Depending on the circumstances, this may include authorised DANTE personnel, appropriate service providers, medical or safeguarding professionals, football organisations or other recipients where there is a legitimate and lawful reason for the disclosure.',
        'Information may also be disclosed where required by law, necessary for an appropriate safeguarding or welfare purpose, or otherwise authorised by the data subject or their appropriate parent or legal guardian where applicable.',
        'DANTE does not sell personal data.',
      ],
    },
    {
      id: 'data-storage',
      title: 'Data Storage',
      paragraphs: [
        'DANTE currently collects its primary internal player and application information mainly using printed forms and maintains its primary internal player and academy records mainly in physical paper form at its office in Ibadan, Oyo State, Nigeria.',
        'Physical records containing personal data are stored securely with access restricted to authorised persons who require the information for a legitimate academy purpose.',
        'Sensitive records, including medical, identification and safeguarding information, are subject to additional care and access restrictions appropriate to the nature of the information.',
      ],
    },
    {
      id: 'online-forms',
      title: 'Online Forms and Tally',
      paragraphs: [
        'DANTE also uses third-party online services for certain activities.',
        'The official online registration and partnership or sponsorship forms currently link to forms provided by Tally. These forms are external links and are not embedded in the DANTE website.',
        'Information entered into those forms is submitted directly to the third-party form provider rather than being stored by the DANTE website itself. The DANTE website does not have an application database and does not store registration or sponsorship submissions.',
      ],
    },
    {
      id: 'international-processing',
      title: 'International Processing and Transfers',
      paragraphs: [
        'Some third-party technology or service providers used by DANTE may process or store personal data outside Nigeria. This includes information submitted through certain authorised online services.',
        'Where personal data is transferred or processed internationally, DANTE will take the steps required under applicable Nigerian data-protection law to ensure that an appropriate lawful basis and level of protection apply.',
        'If DANTE undertakes additional international transfers in the future, including for football registration or international football activities, appropriate legal safeguards will be applied where required.',
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      paragraphs: [
        'DANTE retains personal data only for as long as reasonably necessary for the purpose for which it was collected and for applicable legal, regulatory, contractual, safeguarding, dispute-resolution or record-keeping requirements.',
        'Retention periods may vary according to the type of record and the reason it is held.',
        'Information will be securely deleted, anonymised or otherwise appropriately disposed of when continued retention is no longer justified.',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      paragraphs: [
        'DANTE uses reasonable organisational, physical and technical safeguards appropriate to the information and the way it is held. These may include access restrictions, secure physical storage, account controls and authentication where relevant, confidentiality requirements, staff awareness and appropriate breach-response measures.',
        'No internet or storage system can be guaranteed to be completely secure.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Data-Protection Rights',
      paragraphs: [
        'Subject to applicable law and any lawful limitations, individuals may have rights to request access to personal data, correction, deletion, restriction of processing, objection to certain processing, data portability where applicable, and withdrawal of consent where consent is relied upon.',
        'Requests should be made through the privacy and data-protection contact in this Policy. DANTE may need to verify the identity or authority of the person making a request before acting on it.',
      ],
    },
    {
      id: 'complaints',
      title: 'Questions and Complaints',
      paragraphs: [
        'Questions, complaints and data-protection concerns should first be directed to DANTE using the privacy contact details below so that the matter can be reviewed.',
        'Subject to applicable law, an individual may also make a complaint to the Nigeria Data Protection Commission where appropriate.',
      ],
    },
    {
      id: 'personal-data-breaches',
      title: 'Personal Data Breaches',
      paragraphs: [
        'DANTE will take reasonable steps to assess and respond to a suspected personal data breach and will make notifications to affected persons or the relevant authority where required by applicable law.',
      ],
    },
    {
      id: 'website-technologies',
      title: 'Cookies and Website Technologies',
      paragraphs: [
        'The current DANTE website is a static website without its own application database or first-party registration or contact forms. It does not intentionally use analytics or set cookies for visitor tracking, and it does not use localStorage, sessionStorage or IndexedDB.',
        'The website currently loads Google Fonts externally and may load resources supplied by other third-party technology providers where stated. Google Fonts is a website resource and is not used by DANTE as website analytics.',
        'The website may contain links to third-party services. If a visitor chooses to open an external service, that service may operate under its own privacy and cookie practices.',
        'If DANTE introduces analytics, non-essential cookies or similar tracking technologies in the future, this Policy and the website will be updated and appropriate information and choices will be provided where legally required.',
      ],
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      paragraphs: [
        'The website contains outbound links to independent third-party services, including Tally, WhatsApp and social-media platforms. These are links only and are not embedded social-media or Tally services on the DANTE website.',
        'When a visitor chooses to follow an external link, the third party may process information under its own terms, privacy policy and cookie practices. DANTE is not responsible for the independent privacy practices of those third-party services.',
      ],
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      paragraphs: [
        'DANTE may update this Policy when its practices, services, technology or legal obligations change. The latest version will be published on the website with the applicable effective or revision date.',
      ],
    },
    {
      id: 'contact',
      title: 'Privacy and Data-Protection Contact',
      paragraphs: [
        'DANTE SPORTS MANAGEMENT AND ACADEMY LTD, RC 9492050, Ibadan, Oyo State, Nigeria.',
        `Privacy / Data Protection Email: ${privacyLegalContact.email}. Telephone: +234 906 743 9197.`,
        'Questions, complaints and data-protection requests should be directed to this contact.',
      ],
    },
    {
      id: 'acknowledgement',
      title: 'Acknowledgement',
      paragraphs: [
        'By registering with Dante Sports Management and Academy Ltd, participants and/or their parent or legal guardian acknowledge that they have read and understood this Privacy Policy.',
        'This acknowledgement does not itself constitute consent to every form of personal-data processing. Where consent is required as the applicable lawful basis, DANTE will obtain that consent separately and specifically where required.',
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

export const termsPolicy = {
  title: 'Terms and Conditions',
  version: '1.0',
  lastUpdated: 'August 2026',
  registrationNumber: 'RC 9492050',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      paragraphs: [
        "These Terms and Conditions govern the services, activities and operations of Dante Sports Management and Academy Ltd ('DANTE'). By registering, participating in programmes, using services or engaging with DANTE, participants, parents or guardians, partners and clients agree to these Terms.",
      ],
    },
    {
      id: 'scope',
      title: 'Scope',
      paragraphs: [
        'These Terms apply to all football, boxing and other sports programmes, scouting, player management, events, camps, trials, education, transport and related services.',
      ],
    },
    {
      id: 'registration',
      title: 'Registration',
      paragraphs: [
        'All information must be accurate. DANTE may refuse or cancel registration where false information is provided.',
      ],
    },
    {
      id: 'fees',
      title: 'Fees',
      paragraphs: [
        'Registration fees, training fees and other charges must be paid as agreed. Late payments may result in suspension of services. Fees are generally non-refundable unless required by law or approved by DANTE.',
      ],
    },
    {
      id: 'code-of-conduct',
      title: 'Code of Conduct',
      paragraphs: [
        'Participants must behave respectfully, follow staff instructions, and avoid violence, discrimination, bullying, doping, substance abuse and misconduct.',
      ],
    },
    {
      id: 'attendance',
      title: 'Attendance',
      paragraphs: [
        'Participants should attend training punctually and notify the academy of absences where possible.',
      ],
    },
    {
      id: 'health-and-medical',
      title: 'Health & Medical',
      paragraphs: [
        'Participants must disclose relevant medical conditions. DANTE may require medical clearance. Emergency treatment may be arranged when necessary.',
      ],
    },
    {
      id: 'safeguarding',
      title: 'Safeguarding',
      paragraphs: [
        'DANTE is committed to safeguarding children and vulnerable persons. Abuse, harassment or exploitation will not be tolerated.',
      ],
    },
    {
      id: 'photography-and-media',
      title: 'Photography & Media',
      paragraphs: [
        'Photos and videos may be taken for coaching, safeguarding and promotional purposes unless written objection is provided where legally permitted.',
      ],
    },
    {
      id: 'player-development-and-transfers',
      title: 'Player Development & Transfers',
      paragraphs: [
        'Selection, trials and transfer opportunities are based on merit, performance and applicable FIFA, CAF, NFF and other governing regulations.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      paragraphs: [
        'DANTE logos, documents, branding and educational materials remain the property of DANTE unless otherwise agreed.',
      ],
    },
    {
      id: 'liability',
      title: 'Liability',
      paragraphs: [
        'Sports involve inherent risks. DANTE will take reasonable safety measures but is not liable for injuries or losses except where caused by negligence or where liability cannot legally be excluded.',
      ],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      paragraphs: [
        'Participants are encouraged to maintain appropriate medical and accident insurance where available.',
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy',
      paragraphs: [
        "Personal information will be processed in accordance with applicable privacy and data protection laws and DANTE's Privacy Policy.",
      ],
    },
    {
      id: 'discipline',
      title: 'Discipline',
      paragraphs: [
        'DANTE may suspend or terminate membership for serious misconduct or repeated breaches of these Terms.',
      ],
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      paragraphs: [
        'DANTE is not responsible for delays or cancellations caused by events beyond its reasonable control.',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      paragraphs: [
        'These Terms shall be governed by the laws applicable in the Federal Republic of Nigeria unless otherwise agreed in writing for a specific programme.',
      ],
    },
    {
      id: 'amendments',
      title: 'Amendments',
      paragraphs: [
        'DANTE may update these Terms from time to time. The latest version will apply from its effective date.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      paragraphs: [],
    },
    {
      id: 'acceptance',
      title: 'Acceptance of These Terms',
      paragraphs: [
        'By completing the official DANTE registration process and confirming acceptance of these Terms, the participant or, where applicable, their parent or legal guardian confirms that they have read and understood these Terms and Conditions.',
      ],
    },
  ] satisfies readonly PolicySection[],
} as const;

export const policyLinks = [
  { label: 'Safeguarding & Child Protection', href: '/safeguarding/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Photography & Media', href: '/photography-media/' },
  { label: 'Terms & Conditions', href: '/terms/' },
] as const;
