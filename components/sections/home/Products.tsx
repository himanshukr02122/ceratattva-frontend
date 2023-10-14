import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


const products:{productId:String; productSample: String, productTitle:String; productDescription:String; currency:String, discount:String, markedPrice:number, sellingPrice:number}[] = [
    {
        productId: "9091",
        productSample: "/home/pdc-diagram-1.jpg",
        productTitle: "Product 1",
        productDescription: "Unique amalgamation of superior technologies and project management services.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "9092",
        productSample: "/home/post_07.jpg",
        productTitle: "Product 2",
        productDescription: "Unique amalgamation of superior technologies and project management services.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "9071",
        productSample: "/home/post_14.jpg",
        productTitle: "Product 3",
        productDescription: "Unique amalgamation of superior technologies and project management services.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "8091",
        productSample: "/home/post_16.jpg",
        productTitle: "Product 4",
        productDescription: "Unique amalgamation of superior technologies and project management services.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
    {
        productId: "7999",
        productSample: "/home/pdc-diagram-1.jpg",
        productTitle: "Product 5",
        productDescription: "Unique amalgamation of superior technologies and project management services.",
        currency: "₹",
        discount: "-20%",
        markedPrice: 1000,
        sellingPrice: 800
    },
]


const Items:React.FC<{currentItems:{}[]}> = ({ currentItems }) => {
    return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5'>
        {currentItems &&
          currentItems.map((item:any,index:number ) => (
            <div key={index} className='group border hover:shadow-inner hover:shadow duration-300 hover:border-orange-600'>
              <div className='relative h-52 overflow-hidden '>
                <Image
                  src={item.productSample}
                  alt={item.productTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='object-center object-cover group-hover:scale-125 transform-gpu group-hover:origin-top duration-300'
                />
              </div>
              <div className='py-4 text-center px-4'>
                <span className=' font-semibold text-gray-400'>{item.productId}</span>
                <h3 className='text-xl font-semibold'>{item.productTitle}</h3>
                <p className='text-sm font-light text-justify leading-4 line-clamp-2 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus a necessitatibus vel obcaecati omnis minima esse culpa reprehenderit eveniet?</p>
                {/* <div className='flex gap-3 justify-center items-baseline mt-3'>
                  <span className='text-2xl font-bold'>{item.currency + item.markedPrice}</span>
                  <span className='text-lg font-semibold text-gray-400 line-through'>{item.currency + item.sellingPrice}</span>
                </div> */}
                <Link href="" target='_blank'
                  className='border-2 block mt-4 w-100 py-2 px-5 text-gray-600 hover:border-black hover:bg-black hover:text-white font-medium duration-300'
                >
                  Know More
                </Link>
              </div>
            </div>
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
    <section className='py-10'>
      <div className='container mx-auto'>        
          <h2 className='relative text-4xl font-bold pb-3 mb-10 ci-title--ceratattva'>Products</h2>
          <PaginatedItems itemsPerPage={4} />
      </div>
    </section>
  )
}

export default Products
