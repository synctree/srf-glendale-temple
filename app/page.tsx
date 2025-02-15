export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <a href="https://yogananda.org" className="w-full min-h-screen flex flex-col items-center justify-center p-8">
        <img 
          src="/srf-logo.png" 
          alt="Self-Realization Fellowship Logo" 
          className="w-full max-w-[600px] h-auto mb-8 md:mb-16"
        />
        <p className="text-xl md:text-2xl lg:text-4xl text-gray-600 text-center">
          Touch anywhere to visit yogananda.org
        </p>
      </a>
    </div>
  )
}
