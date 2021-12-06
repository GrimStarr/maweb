import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

import Input from "../../elements/Input";
import Button from "../../elements/Button";
const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

const Purchase = (props) => {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sumbitted, setSumbitted] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [sumbitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("!");
      setLoading(true, () => {
        console.log(loading);
      });
      console.log("fucker", loading);
      const data = new FormData(e.target);
      setError();

      await startPayment({
        setError,
        setTxs,
        ether: data.get("bnb"),
        addr: "0x23d76C2Ae948435957Adf8306135C6AA2FA3A701",
      }).then(setLoading(false));
    } catch (err) {
      setLoading(true);
      console.log(loading);
    }
  };
  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <div className="">
            <div className="my-3">
              <Input
                id="newsletter"
                type="text"
                name="addr"
                label="Subscribe"
                labelHidden
                hasIcon="right"
                placeholder="Your best email"
                defaultValue="0x23d76C2Ae948435957Adf8306135C6AA2FA3A701"
              />
            </div>
            <div className="my-3">
              <Input
                id="newsletter"
                name="bnb"
                type="number"
                label="Subscribe"
                labelHidden
                hasIcon="right"
                placeholder="Amount in BNB"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <Button loading={loading} color="primary" size="10rem" type="submit">
            Buy
          </Button>
          {/* <ErrorMessage message={error} />
          <TxList txs={txs} /> */}
        </footer>
      </div>
    </form>
  );
};

export default Purchase;
