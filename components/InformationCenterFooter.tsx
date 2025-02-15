import Link from 'next/link'

export function InformationCenterFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-20 z-50">
      <Link href="/information-center" className="w-full p-12 flex flex-col items-center gap-6 touch-manipulation">
        <img 
          src="/srf-logo.png" 
          alt="Self-Realization Fellowship Logo" 
          className="h-24 w-24"
        />
        <p className="text-3xl text-white">Touch to return home</p>
      </Link>
    </footer>
  );
}
