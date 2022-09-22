import React from "react";
import img from "../styles/Gaming4-5.jpg";
import { ethers } from "ethers";
import mainnetZoraAddresses from "@zoralabs/v3/dist/addresses/1.json"; // Mainnet addresses, 4.json would be Rinkeby Testnet
import { useState, useEffect } from "react";
import Moralis from "moralis";

function ProfileNfts() {


  const [NftData, SetNftData] = useState([]);
  const MORALIS_API_KEY = "zx1cuyNtlU6YfCw1ARlaDUSJQLXC5uXlfM9ebpJhJSTbbglLJs6sqvHEF9avPztV"
  const address = "0xDaB4984b2F4e06d207f73678935A649ae6969490"
  const chain = 4


  const startServer = async () => {
    await Moralis.start({
      apiKey: MORALIS_API_KEY,
    })
    console.log("sever started");
  }

  startServer();

  async function getDemoData() {
    // Get native balance
    // const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    //   address,
    //   chain,
    // })

    // // Format the native balance formatted in ether via the .ether getter
    // const native = nativeBalance.result.balance.ether

    // const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
    //     address,
    //     chain,
    //   })

    //   // Format the balances to a readable output with the .display() method
    //   const tokens = tokenBalances.result.map((token) => token.display())

    // return { native,tokens }


    const nftsBalances = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
      limit: 100,
    })

    // Format the output to return name, amount and metadata
    const nfts = nftsBalances.result.map((nft) => ({
      name: nft.result.name,
      amount: nft.result.amount,
      metadata: nft.result.metadata,
    }))

    // Add nfts to the output
    console.log(nfts);
    SetNftData(nfts);
    console.log(nfts[0].name);
    console.log(NftData);
  }

  useEffect(() => {
    getDemoData();
  }, [])



  return (
    <>

      <section className="ps-main-container">
        <section className="ps-grid-container">{
          NftData.map((nft, i) => {
            if (nft.metadata && i > 30) {
              return (
                <div key={i}>



                  <div className="ps-grid-div">
                    <div className="ps-video-image">
                      <img src={nft.metadata.image} alt="Nft image" height="100%" width="100%" />
                    </div>
                    <div className="ps-grid-title">
                      <h3 className="ps-title">{nft.name}</h3>
                    </div>
                    <div className="ps-nft-div">
                      <div className="ps-nft-div-inside-one">

                      </div>
                      <div className="ps-nfts-buy-btn">
                        <button className="ps-nfts-buy-button">Create Ask</button>
                      </div>
                    </div>
                  </div>
                </div>


              )
            }
          })
        }
        </section>
      </section>



    </>
  );
}

export default ProfileNfts;
