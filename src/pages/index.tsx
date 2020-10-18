import { GetServerSideProps } from 'next';
import { useCallback } from 'react';
import { Title } from '@/styles/pages/Home';

import SEO from '@/components/SEO';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducs: IProduct[];
}

export default function Home({ recommendedProducs }: HomeProps) {
  const handleSum = useCallback(async () => {
    const match = (await import('@/lib/math')).default;

    alert(match.sum(3, 6));
  }, []);

  return (
    <div>
      <SEO 
        title="DevCommerce, o seu ecommerce top!" 
        image="og.png"
        shouldExcludeTitleSuffix 
      />
      <Title>Hellow World</Title>

      <ul>
        {recommendedProducs.map(recommendProduct => (
          <li key={recommendProduct.id}>{recommendProduct.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleSum}>Soma</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducs = await response.json();

  return {
    props: {
      recommendedProducs
    }
  }
}