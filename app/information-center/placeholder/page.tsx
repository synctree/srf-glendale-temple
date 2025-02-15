import { ContentReferenceCard } from '@/components/ContentReferenceCard'
import Link from 'next/link'

export default function PlaceholderPage() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden" style={{ width: '3840px', height: '2160px' }}>
      <header className="p-12">
        <div className="flex justify-center mb-16">
          <img 
            src="/srf-logo-wide.png" 
            alt="Self-Realization Fellowship Logo" 
            className="h-[800px] w-auto"
          />
        </div>
        <h1 className="text-6xl font-bold text-center">
          Glendale Temple
        </h1>
      </header>

      <main className="p-12">
        <div className="flex gap-12 overflow-x-auto pb-8">
          <ContentReferenceCard 
            variant="card"
            href="https://www.youtube.com/watch?v=fBNz5xF-Kx4"
            title="Awake: The Life of Yogananda"
            description="Witness the great yogi's own journey to enlightenment, and the challenges and victories along the way."
            imageUrl="/yogananda-awake.jpg"
            qrPosition="right"
            qrSize={200}
          />
          
          <ContentReferenceCard
            variant="reference"
            href="https://yogananda.org/meditation"
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
          </ContentReferenceCard>

          <ContentReferenceCard
            variant="reference"
            href="https://yogananda.org/srf-world-convocation-overview"
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
          </ContentReferenceCard>

          <ContentReferenceCard
            variant="card"
            href="/information-center/pages/sample"
            title="Meditation Techniques"
            description="Learn about the meditation techniques taught in Self-Realization Fellowship"
            imageUrl="/yogananda-awake.jpg"
            qrPosition="right"
          />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-8 flex flex-col items-center gap-4">
        <Link href="/information-center">
          <img 
            src="/srf-logo.png" 
            alt="Self-Realization Fellowship Logo" 
            className="h-16 w-16"
          />
        </Link>
        <p className="text-xl">Touch anywhere to begin exploring</p>
      </footer>
    </div>
  )
}
