export const WHATSAPP_NUMBER = '919022441860';
export const PHONE_DISPLAY = '+91 90224 41860';
export const PHONE_TEL = 'tel:+919022441860';

export function whatsappUrl(text = '') {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
