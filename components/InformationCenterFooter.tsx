import Link from 'next/link'

export function InformationCenterFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-8 flex flex-col items-center gap-4 bg-black bg-opacity-20">
      <Link href="/information-center">
        <img 
          src="/srf-logo.png" 
          alt="Self-Realization Fellowship Logo" 
          className="h-16 w-16"
        />
      </Link>
      <p className="text-3xl text-white">Touch to return home</p>
    </footer>
  );
}
