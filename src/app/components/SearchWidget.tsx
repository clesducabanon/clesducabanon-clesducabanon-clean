import { useEffect } from 'react';

export function SearchWidget() {
  useEffect(() => {
    // Load Avantio CSS
    const avantioCSS = document.createElement('link');
    avantioCSS.rel = 'stylesheet';
    avantioCSS.href = 'https://crs.avantio.com/datosBroker/bk_ducabanon/css/formulario-style.css';
    document.head.appendChild(avantioCSS);

    const fontLibrary = document.createElement('link');
    fontLibrary.rel = 'stylesheet';
    fontLibrary.href = 'https://fwk.avantio.com/assets/core-7.0/fonts/fontlibrary/css/fontlibrary.css';
    document.head.appendChild(fontLibrary);

    // Add meta tag
    const metaTag = document.createElement('meta');
    metaTag.name = 'avantio-integration';
    metaTag.content = 'FrameworkITS';
    document.head.appendChild(metaTag);

    // Load jQuery if not present
    if (!(window as any).jQuery) {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://crs.avantio.com/default/js/jquery-3.4.1.min.js';
      jqueryScript.async = false;
      document.body.appendChild(jqueryScript);
    }

    // Load Avantio scripts
    const avantioScript = document.createElement('script');
    avantioScript.src = 'https://fwk.avantio.com/assets/core-7.0/js/its--scripts.js';
    avantioScript.async = true;
    avantioScript.type = 'text/javascript';
    document.body.appendChild(avantioScript);

    // Load the search form via iframe approach (since we can't execute PHP in React)
    const formContainer = document.getElementById('miniformulario_slider');
    if (formContainer) {
      // Create an iframe to load the Avantio search form
      const iframe = document.createElement('iframe');
      iframe.src = 'https://reservation.clesducabanon.fr/location/formularioMiniOptimized.php?bk=bk_ducabanon&Idioma=FR&Fajax=1&formato=1';
      iframe.style.width = '100%';
      iframe.style.height = '300px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '1rem';
      iframe.title = 'Recherche de logements';
      formContainer.appendChild(iframe);
    }

    return () => {
      // Cleanup
      if (avantioCSS.parentNode) document.head.removeChild(avantioCSS);
      if (fontLibrary.parentNode) document.head.removeChild(fontLibrary);
      if (metaTag.parentNode) document.head.removeChild(metaTag);
    };
  }, []);

  return (
    <div className="w-full">
      <div id="miniformulario_slider" className="avantio-search-widget"></div>
    </div>
  );
}