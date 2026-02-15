export const hamburger =
  "flex flex-col justify-between w-6 h-6 cursor-pointer group lg:hidden";
export const line = "block h-0.5 w-full bg-[var(--light)] mb-1 group-hover:bg-black";
export const navlinks =
  `
  hidden
  lg:flex
  gap-3
  bg-[var(--accent)]
  p-4
  z-50
  lg:static
  fixed inset-0
flex
items-center 
justify-center
text-center
flex-col
md:flex-row
  `;
export const navlinkItem = "text-[var(--light)]    hover:text-[var(--main)] transition-colors duration-150";
export const header =
  "relative    p-4 bg-[var(--accent)] flex items-center justify-between   top-0 z-50 ";
export const logo = "flex items-center gap-2";  
export const langlink =
  "text-[10px] md:text-sm text-[var(--light)] hover:text-black transition-colors duration-150";

export const footer = "w-full bg-[var(--main)] border-t  text-[var(--light)] text-sm";
export const footerContainer = "max-w-6xl mx-auto px-4 py-10 flex justify-between";
export const footerSection = "w-1/3 text-center break-words"; 
export const footerHeading = "font-semibold mb-2"; 
export const footerText = "text-brand-text-light mb-2"; 
export const socialContainer = "flex items-center justify-center gap-2 mt-2";
export const socialIcon = "w-6 h-6";
export const copyright = "text-center text-xs text-brand-text-light pt-4";
// example additions to styles/styles.ts
export const footerNavContainer = "flex flex-col gap-2"; // חשוב: אין 'hidden' כאן
export const footerLink = "text-sm hover:underline hover:text-brand-dark inline-block mr-2"; // זה שהדגמתי קודם

