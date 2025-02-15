import { ExternalLinkCard } from '@/components/ExternalLinkCard'
import { ExternalReference } from '@/components/ExternalReference'

export default function PlaceholderPage() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden" style={{ width: '3840px', height: '2160px' }}>
      <header className="p-12">
        <div className="flex justify-center mb-16">
          <img 
            src="/srf-logo-wide.png" 
            alt="Self-Realization Fellowship Logo" 
            className="h-96 w-auto"
          />
        </div>
        <h1 className="text-6xl font-bold text-center">
          Glendale Temple
        </h1>
      </header>

      <main className="p-12">
        <div className="flex gap-8 overflow-x-auto pb-8">
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

        <div className="flex gap-12 overflow-x-auto mt-8 pb-8">
          <ExternalLinkCard 
            url="https://www.youtube.com/watch?v=fBNz5xF-Kx4"
            title="Awake: The Life of Yogananda"
            description="Witness the great yogi's own journey to enlightenment, and the challenges and victories along the way."
            imageUrl="/yogananda-awake.jpg"
            qrPosition="right"
            qrSize={200}
          />
          
          <ExternalReference
            url="https://yogananda.org/meditation"
            title="Learn to Meditate"
            description="Discover ancient meditation techniques taught by Paramahansa Yogananda"
            imageUrl="/yogananda-awake.jpg"
            qrPosition="left"
            qrSize={300}
          >
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-white">
                "The soul loves to meditate, for in contact with the Spirit lies its greatest joy."
              </p>
              <p className="text-xl text-white italic">
                — Paramahansa Yogananda
              </p>
            </div>
          </ExternalReference>

          <ExternalReference
            url="https://yogananda.org/srf-world-convocation-overview"
            title="SRF World Convocation 2025"
            description="Join thousands of spiritual seekers from around the world for a week of spiritual renewal - June 22-28, 2025"
            imageUrl="https://yogananda.org/craft-public-storage/_1440xAUTO_crop_center-center_90_none/Convocation-Overview-Brother-Bhumananda.jpg"
            qrPosition="right"
            qrSize={300}
          >
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-white">
                "They shall come from all parts of the world, thousands and thousands of them... for Self-Realization is bringing the original Christianity of Christ and the original Yoga of India's Krishna so that all people of all religions can follow one highway to the Infinite."
              </p>
              <p className="text-xl text-white italic">
                — Paramahansa Yogananda
              </p>
            </div>
          </ExternalReference>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-8 flex flex-col items-center gap-4">
        <img 
          src="/srf-logo.png" 
          alt="Self-Realization Fellowship Logo" 
          className="h-16 w-16"
        />
        <p className="text-xl">Touch anywhere to begin exploring</p>
      </footer>
    </div>
  )
}
