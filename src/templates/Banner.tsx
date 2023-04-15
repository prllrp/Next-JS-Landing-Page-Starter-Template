import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-gray-900">
    <Section>
      <HeroOneButton
        title={<></>}
        description=""
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

export { Banner };
