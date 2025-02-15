import { SplitInformation } from '@/components/SplitInformation';
import { InformationCenterFooter } from '@/components/InformationCenterFooter';

export default function SamplePage() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden" style={{ width: '3840px', height: '2160px' }}>
      <SplitInformation
        backgroundColor="#052957"
        imageUrl="/yogananda-awake.jpg"
        imageOnLeft={true}
      >
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-8">
            Meditation Techniques
          </h1>
          <p className="text-3xl mb-8">
            Learn the scientific techniques of meditation as taught by Paramahansa Yogananda, 
            designed to help you achieve a deep state of inner peace and communion with the Divine.
          </p>
          <blockquote className="text-2xl italic border-l-4 border-white pl-6 mb-8">
            "The soul loves to meditate, for in contact with the Spirit lies its greatest joy."
            <footer className="mt-2">— Paramahansa Yogananda</footer>
          </blockquote>
          <div className="text-2xl">
            <p className="mb-4">• Hong-Sau Technique of Concentration</p>
            <p className="mb-4">• Aum Technique of Meditation</p>
            <p>• Kriya Yoga</p>
          </div>
        </div>
      </SplitInformation>
      <InformationCenterFooter />
    </div>
  );
}
