'use client';

/* ============================================================
   SiteChrome – blendet Navbar & Footer auf Landingpages aus.
   Alle Routen unter /lp/* sind bewusst „bare": kein Menü, kein
   Footer, kein Logo-Link zurück zur Startseite – reine, ablenkungs-
   freie Conversion-Seiten für Bezahl-Traffic (SEA/Social).
   ============================================================ */
import { usePathname } from 'next/navigation';
import { Navbar, Footer } from './sections';

export function SiteChrome({ children }) {
  const pathname = usePathname() || '';
  const bare = pathname.startsWith('/lp');

  if (bare) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
