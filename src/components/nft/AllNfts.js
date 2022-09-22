import React, { useState, useEffect } from "react";
import "../nft/AllNfts.scss";
import img from "../nft/man.png";
import Moralis from "moralis";



function AllNfts() {


  const [NftData, SetNftData] = useState([]);
  const MORALIS_API_KEY = "zx1cuyNtlU6YfCw1ARlaDUSJQLXC5uXlfM9ebpJhJSTbbglLJs6sqvHEF9avPztV"
  const address = "0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b"
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
      <div className="nft-main-container">
        <div className="nft-header">
          <h1 className="t-header">NFTs</h1>
          <p className="p-header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            temporibus sed voluptatem dicta quas vitae quibusdam omnis similique
            optio sint esse quisquam
          </p>
        </div>
        <div className="nft-main-content">
          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>

          <div className="nft-content">
            <div className="nft-video">
              <video width="320" height="240" controls>
                <source src="example.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="nft-user">
                <div className="nft-img-name">
                  <img src={img} alt="" />
                  <span>user name</span>
                </div>
                <button type="submit" className="nft-btn" alt="ASK Now">
                  ASK NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNfts;
