import { SplitInformation } from '@/components/SplitInformation';
import { InformationCenterFooter } from '@/components/InformationCenterFooter';

export default function ConvocationPage() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden" style={{ width: '3840px', height: '2160px' }}>
      <SplitInformation
        backgroundColor="#052957"
        imageUrl="https://yogananda.org/craft-public-storage/_1440xAUTO_crop_center-center_90_none/Convocation-Overview-Brother-Bhumananda.jpg"
        imageOnLeft={false}
        href="https://yogananda.org/srf-world-convocation-overview"
      >
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-8">
            SRF World Convocation 2025
          </h1>
          <p className="text-3xl mb-8">
            Join thousands of spiritual seekers from around the world for a week of spiritual renewal 
            and divine fellowship at the Self-Realization Fellowship World Convocation.
          </p>
          <div className="text-2xl mb-8">
            <p className="mb-4">• June 22-28, 2025</p>
            <p className="mb-4">• Los Angeles, California</p>
            <p className="mb-4">• In-person & Online</p>
          </div>
          <blockquote className="text-2xl italic border-l-4 border-white pl-6">
            "They shall come from all parts of the world, thousands and thousands of them... 
            for Self-Realization is bringing the original Christianity of Christ and the original 
            Yoga of India's Krishna so that all people of all religions can follow one highway to the Infinite."
            <footer className="mt-2">— Paramahansa Yogananda</footer>
          </blockquote>
        </div>
      </SplitInformation>
      <InformationCenterFooter />
    </div>
  );
}
