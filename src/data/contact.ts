export const contact = {
  addressLines: [
    'Glass House Adeleye,',
    'Opposite Beulah Academy,',
    'Along Iwo Road,',
    'Ibadan,',
    'Oyo State,',
    'Nigeria',
  ],
  phones: [
    {
      display: '+234 906 743 9197',
      href: 'tel:+2349067439197',
      label: 'Primary telephone',
      isPrimary: true,
    },
    {
      display: '+234 806 251 7246',
      href: 'tel:+2348062517246',
      label: 'Secondary telephone',
      isPrimary: false,
    },
  ],
  email: 'dantesportacademy02@gmail.com',
  emailHref: 'mailto:dantesportacademy02@gmail.com',
  whatsapp: {
    display: '+31 686 470 414',
    href: 'https://wa.me/31686470414',
  },
  programmeEnquiryHref:
    'mailto:dantesportacademy02@gmail.com?subject=Programme%20Enquiry',
  partnershipEnquiryHref:
    'mailto:dantesportacademy02@gmail.com?subject=Partnership%20Enquiry',
  directionsUrl: '',
} as const;
