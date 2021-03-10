export const formatMonet = Intl.NumberFormat('en-CA', {
    style:    'currency',
    currency: 'CAD',
}).format;
