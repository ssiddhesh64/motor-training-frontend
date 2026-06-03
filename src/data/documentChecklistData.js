const documentChecklist = {
  common: {
    title: 'Common documents (all applicants)',
    items: [
      {
        id: 'age-proof',
        label:
          'Age proof (Aadhaar, birth certificate, or school leaving certificate as accepted by RTO)',
      },
      {
        id: 'address-proof',
        label:
          'Address proof (Aadhaar, utility bill, rental agreement, etc. as per current RTO rules)',
      },
      {
        id: 'photos',
        label:
          'Passport-size photographs (quantity as required by RTO at time of application)',
      },
      {
        id: 'application-form',
        label:
          'Filled learner’s licence / licence application forms (we assist at the centre)',
      },
      {
        id: 'fees',
        label: 'Applicable RTO fees (paid as per government rates)',
      },
    ],
  },
  twoWheeler: {
    title: 'Two-wheeler (MCWG / gearless as applicable)',
    items: [
      {
        id: '2w-class',
        label: 'Apply for the correct vehicle class on your learner’s licence',
      },
      {
        id: '2w-gear',
        label:
          'Confirm with us whether you are learning gear or gearless — class on licence must match',
      },
    ],
  },
  fourWheeler: {
    title: 'Four-wheeler (LMV – car)',
    items: [
      {
        id: '4w-class',
        label: 'Learner’s licence for Light Motor Vehicle (LMV)',
      },
      {
        id: '4w-medical',
        label:
          'Medical certificate if required for your age/category (check current RTO norms)',
      },
    ],
  },
  visitDay: {
    title: 'On your first visit to our school',
    items: [
      { id: 'visit-id', label: 'Original ID proof for verification' },
      {
        id: 'visit-ll',
        label: 'Learner’s licence if you already have one',
      },
      {
        id: 'visit-phone',
        label: 'Active mobile number for updates and batch coordination',
      },
    ],
  },
  notes: [
    'Document rules can change with RTO notifications. We confirm the latest list when you visit.',
    'For learners under 18, parent/guardian consent and documents may be required.',
    'Keep both original and photocopies unless the RTO asks otherwise.',
  ],
};

export const vehicleOptions = [
  { id: 'all', label: 'All' },
  { id: '2w', label: 'Two-wheeler' },
  { id: '4w', label: 'Four-wheeler' },
];

export default documentChecklist;
