import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Products:React.FC<{currentItems:{}[]}> = ({currentItems}) => {
  console.log(currentItems, 'currentItems');
  return(
    <div>
        {
          currentItems.map((item:any, index:number)=> {
            console.log(item, 'item', item.productId);
            return(
              <div key={index}>

              </div>
            )
          })
        }
    </div>

  )}

const PaginatedItems: React.FC<{itemsPerPage: number, items:{}[]}> = ({ itemsPerPage, items }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event:any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    return (
        <>
            <Products currentItems={currentItems} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< prev"
              renderOnZeroPageCount={null}
              className="flex gap-3 items-center justify-end"
            />
        </>
    );
}
export default PaginatedItems;