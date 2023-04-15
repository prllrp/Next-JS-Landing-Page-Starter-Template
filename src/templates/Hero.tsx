import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-800">
    <Section yPadding="py-6 px-10">
      <div className="flex justify-center items-center">
        <img src="/assets/images/hero.png" alt="hero" />
      </div>
    </Section>

    <Section yPadding="pt-5 pb-32">
      <HeroOneButton
        title={
          <>
            {'Never worry about having a '}
            <span className="text-primary-500"> dirty car </span>
            {'again.'}
          </>
        }
        description="ScrubStop brings the car wash to you on a regular basis. Never worry about dirt or pollen build up again. Our car care professionals will keep your car looking like new."
        button={
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="px-8 py-3 rounded-lg border border-gray-700 mr-4"
            />
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg">
              Submit{' '}
            </button>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
