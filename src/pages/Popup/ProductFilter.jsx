import React, { useState } from 'react';
import { Slider } from 'antd';



const getUrl = (min = 0, max = 10000, discountMin = 0, discountMax = '100') => {
  return `https://www.amazon.in/s?rh=n:976392031,p_n_pct-off-with-tax:${discountMin}-${discountMax},p_36:${min}-${max}&cat=8&d_f_save=${discountMin}-${discountMax}&filter-by=0&primestatus=yes&shortby=0&tag=quickoffer05-21&topbrands=yes`;
};

const ProductFilter = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sliderValue, setSliderValue] = useState([5, 25]);

  const handleSliderChange = (newValues) => {
    setSliderValue(newValues);
  };

  const handleSearch = () => {
    if (minPrice !== '' && maxPrice !== '') {

      const resultURL = getUrl(minPrice*100, maxPrice*100, sliderValue[0], sliderValue[1]);
      console.log(resultURL);
      chrome.tabs.create({url: resultURL});
    }
  };

  return (
    <div className=" bg-blue-100">
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Deals & Offers</h1>

          <ul className="flex space-x-4">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='px-4'>



      <div className="flex items-center justify-center">
        <h1 className="underline text-xl antialiased	">Deals and Offers</h1>
      </div>

      <div className="justify-items  pt-3">
        <h1 className="antialiased  ">
          Discover unbeatable deals and promotions across multiple websites. Get
          access to exclusive discounts and offers, all in one place. Save money
          and time while shopping online with our curated selection.
        </h1>
      </div>

      <div>

        <div className="pt-4">
            <h1 className='text-sm'>
              Discount Percent: {sliderValue[0]}% - {sliderValue[1]}%
            </h1>

          <Slider
            range={{ draggableTrack: true }}
            value={sliderValue}
            min={0}
            max={100}
            step={2}
            onChange={handleSliderChange}
          />
         
        </div>

        <h1 className="text-sm pt-2	">Select the Range of price</h1>
        <div className="flex justify-between pt-2">
          <input
            placeholder="Minimum Price"
            className="border border-blue-500 rounded-lg px-1 py-2"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            placeholder="Maximum Price"
            className="border border-blue-500 rounded-lg px-1 py-2"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="pt-2  h-12">
          <button
            className="flex bg-amber-200	 items-center justify-center pt-4 w-28 border border-blue-500 rounded-lg p-4 h-6"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductFilter;
