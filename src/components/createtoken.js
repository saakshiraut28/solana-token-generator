import React from 'react'
import waves from '../assets/waves.jpg'

function CreateToken() {
    return ( 
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-950 text-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl  bg-gray-900 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 h-full md:mr-6 flex items-center justify-center">
          <img
            alt="Contact Image"
            className="object-cover w-full h-full rounded-lg"
            height={500}
            src={waves}
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="image">
                Image
              </label>
              <input
                className="w-full px-4 py-2 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                id="image"
                placeholder="Upload Image"
                type="file"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="name">
                Token Name
              </label>
              <input
                className="w-full px-4 py-1 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                id="name"
                placeholder="Enter token Name"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="symbol">
                Symbol
              </label>
              <input
                className="w-full px-4 py-1 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                id="symbol"
                placeholder="Enter token Symbol"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="decimals">
                Decimals
              </label>
              <input
                className="w-full px-4 py-1 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                id="decimals"
                placeholder="Upto how many decimals?"
                type="number"              
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="amount">
                Amount
              </label>
              <input
                className="w-full px-4 py-1 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                id="decimals"
                placeholder="How many token you wanna generate?"
                type="number"              
              />
            </div>
            
            <button
              className="w-fit px-6 py-2 text-md font-medium text-gray-50 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="submit"
            >
              Generate ✅
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default CreateToken;