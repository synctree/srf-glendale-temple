import Link from 'next/link'

export function InformationCenterFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-20">
      <Link href="/information-center" className="w-full p-8 flex flex-col items-center gap-4">
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
