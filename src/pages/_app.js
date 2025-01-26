import { useEffect } from 'react';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add Google Tag Manager script dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-J25ZVE5YTK';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J25ZVE5YTK');
    `;
    document.head.appendChild(script2);
  }, []);

  return <Component {...pageProps} />;
}