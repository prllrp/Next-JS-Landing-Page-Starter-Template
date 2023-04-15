import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-gray-900">
    <Section
      title="Home Car Wash Subscription"
      description="Monthly, weekly, or bi-weekly: We come to you and maintain the exterior of your vehicle with a professional hand-wash"
    >
      <VerticalFeatureRow
        title="1. Schedule your ScrubStop"
        description="Choose your subscription plan and then choose the time and dates that work best for you. We have time slots that fit every schedule."
        image="/assets/images/cartoon1.png"
        imageAlt="Schedule your ScrubStop"
      />
      <VerticalFeatureRow
        title="2. Park It"
        description="Make sure your car is parked in a safe location and we will take care of the rest. Exterior washing only, so no interior access needed. Leave your car behind and we'll make it shine. "
        image="/assets/images/cartoon2.png"
        imageAlt="Park your car in the driveway"
        reverse
      />
      <VerticalFeatureRow
        title="3. ScrubStop"
        description="Our car care professionals will give your car a professional hand-wash and dry. Your paint, tires and windows will be clean and shiny without you lifting a finger."
        image="/assets/images/cartoon3.png"
        imageAlt="We clean your car"
      />

      <VerticalFeatureRow
        title="4. Relief"
        description="Never worry about dirt or pollen build up again. Get back to the things you love and let us keep your car looking like new."
        image="/assets/images/cartoon4.png"
        imageAlt="Shiny clean car"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
