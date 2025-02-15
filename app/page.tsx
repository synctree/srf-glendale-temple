export default function Page() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden" style={{ width: '3840px', height: '2160px' }}>
      <a href="https://yogananda.org" className="w-full h-full flex flex-col items-center justify-center">
        <img 
          src="/srf-logo.png" 
          alt="Self-Realization Fellowship Logo" 
          className="h-[600px] w-[600px] mb-16"
        />
        <p className="text-4xl text-gray-600">Touch anywhere to visit yogananda.org</p>
      </a>
    </div>
  )
}
