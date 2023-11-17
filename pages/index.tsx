import Clouds1 from '@/assets/background.png';
import {
  BackgroundComponent,
  BackgroundImage1,
  FooterComponent,
  FooterLink,
} from '@/components/quotesComps/Elements';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = React.useState<number | null>(0);

  return (
    <>
      <Head>
        <title>Quotes App</title>
        <meta name="description" content="generate the quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundComponent>
        <BackgroundImage1 src={Clouds1} sizes="contain" alt="background" />
        <FooterComponent>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with{' '}
            <FooterLink
              href="https://github.com/rick-liyue-huang/AWS-Based-Quotes-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              @RickHuang
            </FooterLink>
          </>
        </FooterComponent>
      </BackgroundComponent>
    </>
  );
}
