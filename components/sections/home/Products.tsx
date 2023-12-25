import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


const products:{productId:String; productSample: String, productTitle:String; productDescription:String; currency:String, discount:String, markedPrice:number, sellingPrice:number}[] = [
    {
        productId: "9091",
        productSample: "/products/polymer-and-precursors-banner.jpg",
        productTitle: "Preceramic Precursors and Polymers",
        productDescription: "At CeraTattva, we intricately design and develop advanced preceramic polymers & precursors that can be transformed into thermo-structural, functional, and technical ceramics.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "9092",
        productSample: "/products/advanced-ceramics-banner.jpg",
        productTitle: "Advanced Ceramics",
        productDescription: "Aligned with growing demands for high performance ceramics, Certattva brings to you multi-functional advanced oxides, carbides, nitrides, borides, carboborides, carbonitrides and carboboronitrides that cater to a wider market.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "9071",
        productSample: "/products/ceramic-processing-instrument-banner.jpg",
        productTitle: "Ceramic Processing Technologies",
        productDescription: "Fibers are ubiquitous in our day-to-day life and CeraTattva foresees the requirement of a simple, cost-effective and efficient polymer and ceramic fiber producing machine which is amenable for bulk production.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "8091",
        productSample: "/products/ceraquest-banner.jpg",
        productTitle: "Ceramic Processing Technologies",
        productDescription: "Ceraquest- an initiative by CeraTattva Pvt Ltd provides a one stop solution for all your “Material” needs.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    }
]


const Items:React.FC<{currentItems:{}[]}> = ({ currentItems }) => {
    return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12  py-5'>
        {currentItems &&
          currentItems.map((item:any,index:number ) => (
            <div key={index} className='relative h-full pb-16 rounded relative group border border-orange-600 sm:border-gray-300 hover:shadow-inner hover:shadow-xl duration-300 hover:border-orange-600'>
              <div className='relative w-11/12 mx-auto h-64 xl:h-72 4xl:h-96 top-[-20px] overflow-hidden rounded-lg shadow-xl'>
                  <Image
                      src={item.productSample}
                      alt={item.productTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className='object-center object-cover group-hover:scale-125 transform-gpu group-hover:origin-top duration-300 rounded-lg'
                  />
              </div>
              <div className='py-2 top-64 bottom-0 left-0 px-4'>
                  <div>
                      <h3 className='text-2xl font-semibold line-clamp-2'>{item.productTitle}</h3>
                      <p className='text-sm xl:text-lg line-clamp-3 my-2 duration-300'>{item.productDescription}</p>
                  </div>
              </div>
              <Link href="/product"
                  className='border-2 absolute bottom-2 left-0 right-0 mx-4 text-center block mt-4 w-100 py-2 xl:py-3 xl:text-lg px-5 text-gray-600 hover:border-black hover:bg-black hover:text-white font-medium duration-300'
                  >
                  Know More
              </Link>
            </div>
            // <div key={index} className='group max-w-xs mx-auto md:max-w-none border border-orange-600 sm:border-gray-300 hover:shadow-inner hover:shadow duration-300 hover:border-orange-600'>
            //   <div className='relative h-52 4xl:h-80 overflow-hidden '>
            //     <Image
            //       src={item.productSample}
            //       alt={item.productTitle}
            //       fill
            //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            //       className='object-center object-cover group-hover:scale-125 transform-gpu group-hover:origin-top duration-300'
            //     />
            //   </div>
            //   <div className='py-4 text-center px-4'>
            //     <span className=' font-semibold text-gray-400'>{item.productId}</span>
            //     <h3 className='text-xl font-semibold'>{item.productTitle}</h3>
            //     <p className='text-sm font-light text-left leading-4 line-clamp-2 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus a necessitatibus vel obcaecati omnis minima esse culpa reprehenderit eveniet?</p>
            //     <Link href="" target='_blank'
            //       className='border-2 block mt-4 w-100 py-2 px-5 text-gray-600 hover:border-black hover:bg-black hover:text-white font-medium duration-300'
            //     >
            //       Know More
            //     </Link>
            //   </div>
            // </div>
          ))}
      </div>
    );
  }
  
  const PaginatedItems:React.FC<{itemsPerPage:number}> = ({ itemsPerPage }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching products from another resources.
    // (This could be products from props; or products loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event:any) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          className="ci-paginate text-lg flex gap-3 items-center justify-end mt-2"
        />
      </>
    );
  }
  

const Products = () => {
  return (
    <section className='py-5 sm:py-10'>
      <div className='container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl mx-auto px-5'>      
          <h2 className='relative text-4xl font-bold pb-3 mb-10 ci-title--ceratattva inline-block'>Products</h2>
          <PaginatedItems itemsPerPage={4} />
      </div>
    </section>
  )
}

export default Products
