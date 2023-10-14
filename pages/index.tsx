import { Inter } from 'next/font/google'
import SeoTag from '@/components/globals/SeoTag';
import Banner from '@/components/sections/home/Banner';
import CeratattvaPurpose from '@/components/sections/home/CeratattvaPurpose';
import Achievements from '@/components/sections/home/Achievements';
import CompanyDetails from '@/components/sections/home/CompanyDetails';
import Products from '@/components/sections/home/Products';
import CoreValues from '@/components/globals/sections/CoreValues';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SeoTag />
      <Banner />
      <CoreValues />
      <CeratattvaPurpose />
      <Products />
      <Achievements />
      <CompanyDetails />
    </>
  )
}
