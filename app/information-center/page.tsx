import { ExternalLink } from '@/components/ExternalLink'
import Link from 'next/link'

export default function InformationCenter() {
  return (
    <div className="fixed inset-0 bg-gray-100 overflow-hidden" style={{ width: '3840px', height: '2160px' }}>
      <header className="p-12">
        <h1 className="text-6xl font-bold text-center">
          SRF Glendale Temple Information Center
        </h1>
      </header>

      <main className="flex flex-col gap-8 p-12">
        <div className="grid grid-cols-3 gap-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-semibold mb-6">Welcome</h2>
            <p className="text-2xl">
              Welcome to the Self-Realization Fellowship Glendale Temple. This information center is here to help you learn about our temple, activities, and teachings.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-semibold mb-6">Today's Schedule</h2>
            <p className="text-2xl">
              [Placeholder for daily schedule information]
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-semibold mb-6">Upcoming Events</h2>
            <p className="text-2xl">
              [Placeholder for upcoming events]
            </p>
          </section>
        </div>

        <div className="flex justify-center mt-8">
          <ExternalLink 
            url="https://yogananda.org"
            title="Learn More About SRF"
            description="Explore the teachings of Paramahansa Yogananda on our main website"
            imageUrl="/placeholder-temple.jpg"
            qrPosition="right"
            qrSize={200}
          />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-8 text-center">
        <p className="text-xl">Touch anywhere to begin exploring</p>
      </footer>
    </div>
  )
}
