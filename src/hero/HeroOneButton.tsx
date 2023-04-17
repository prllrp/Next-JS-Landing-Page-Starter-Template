import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-white font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    <div className="text-2xl mt-4 mb-16 font-bold">
      {
        'Coming soon to San Antonio! Leave your email below to be notified when we launch and receive a free wash!'
      }
    </div>
    {props.button}
  </header>
);

export { HeroOneButton };
