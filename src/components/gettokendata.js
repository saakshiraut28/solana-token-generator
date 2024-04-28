import React from 'react'
import waves from '../assets/waves.jpg'
import * as web3 from '@solana/web3.js';

function parseTokenData(tokenAccountInfo) {
  if (!tokenAccountInfo || !tokenAccountInfo.value || !tokenAccountInfo.value.data) {
    throw new Error('Token account info is invalid or empty.');
  }

  // Extract token data from the account info
  const data = tokenAccountInfo.value.data;
  const parsedData = Buffer.from(data[ 0 ], 'base64'); // Decode base64 data

  // Assuming the token data is stored in a specific format, you'll need to parse it accordingly
  // For example, if the token data is stored as a JSON object, you can parse it like this:
  const tokenInfo = JSON.parse(parsedData.toString());

  // Here, you would need to extract the token metadata from the parsed data
  // This depends on how the token's metadata is structured

  // For demonstration, let's assume the token data contains name, symbol, and decimals
  const { name, symbol, decimals } = tokenInfo;

  // Return the parsed token metadata
  return {
    name,
    symbol,
    decimals
  };
}

function GetTokenData() {
  const connection = new web3.Connection('https://api.testnet.solana.com');
  async function handleSubmit(e) {
    e.preventDefault();

    const tokenMintAddress = e.target.elements.tokenMintAddress.value;

    try {
      // Fetch token metadata
      const tokenAccountInfo = await connection.getParsedAccountInfo(new web3.PublicKey(tokenMintAddress));
      const tokenInfo = parseTokenData(tokenAccountInfo);


      // Display token metadata
      console.log('Token Name:', tokenInfo.name);
      console.log('Token Symbol:', tokenInfo.symbol);
      console.log('Decimals:', tokenInfo.decimals);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-950 text-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl  bg-gray-900 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 h-full md:mr-6 flex items-center justify-center">
          <img
            alt="Contact Image"
            className="object-cover w-full h-full rounded-lg"
            height={ 500 }
            src={ waves }
            style={ {
              aspectRatio: "500/500",
              objectFit: "cover",
            } }
            width={ 500 }
          />
        </div>
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Get Token Data</h2>
            <p className="text-gray-400">Enter the address of the token.</p>
          </div>
          <form className="space-y-4" onSubmit={ handleSubmit }>
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="name">
                Token Address
              </label>
              <input
                className="w-full px-4 py-1 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                id="tokenMintAddress"
                name="tokenMintAddress"
                placeholder="Enter token address"
                type="text"
              />
            </div>
            <button
              className="w-fit px-6 py-2 text-md font-medium text-gray-50 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="submit"
            >
              Get Metadata 📝
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetTokenData;