import { useState, useRef, useEffect } from "react"
// import { Wallet, utils } from 'ethers';
import { useEthers } from "@usedapp/core"
// import { seeds } from "../utils/seeds";
// import { checkBalances } from "../utils/balance";
// import { toast } from "react-toastify";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useSendMessage } from "../hooks/useSendMessage";

const Main = () => {
    const { addresses, mnemonics, counter } = useTypedSelector(state => state.main);
    const { SetAddresses, SetMnemonics, IncreaseCounter } = useActions();

    const messageHook = useSendMessage();

    const pause = useRef(true);
    const { account, activateBrowserWallet, deactivate } = useEthers();

    // function connect() {
    //     if(account) {
    //         pause.current = true;
    //         deactivate();
    //     } else {
    //         activateBrowserWallet();
    //     }   
    // }

    // function getRandomMnemonic() {
    //     const arrayMnemonic = []
    //     while(arrayMnemonic.length < 12) {
    //         arrayMnemonic.push(seeds[Math.floor(Math.random() * 2047)]);
    //     }
    //     return arrayMnemonic.join(" ");
    // }
    
    // function getValidMnemonic() {
    //     let valid = false;
    //     let mnemonic;
    //     while(!valid) {
    //        mnemonic = getRandomMnemonic();
    //        valid = utils.isValidMnemonic(mnemonic);
    //     }
    //     return mnemonic;
    // }

    // async function getBatchMnemonics() {
    //     const batch = await Promise.all([
    //             getValidMnemonic(), // 1
    //             getValidMnemonic(), // 2
    //             getValidMnemonic(), // 3
    //             getValidMnemonic(), // 4
    //             getValidMnemonic(), // 5
    //             getValidMnemonic(), // 6
    //             getValidMnemonic(), // 7
    //             getValidMnemonic(), // 8
    //             getValidMnemonic(), // 9
    //             getValidMnemonic(), // 10
    //             getValidMnemonic(), // 11
    //             getValidMnemonic(), // 12
    //             getValidMnemonic(), // 13
    //             getValidMnemonic(), // 14
    //             getValidMnemonic(), // 15
    //             getValidMnemonic(), // 16
    //             getValidMnemonic(), // 17
    //             getValidMnemonic(), // 18
    //             getValidMnemonic(), // 19
    //             getValidMnemonic() // 20
    //     ]);
    //     return batch;
    // }

    // async function getAddresses(_batch: string[]) {
    //     const addresses: string[] = await Promise.all(
    //         _batch.map( _mnemonic => {
    //             return (Wallet.fromMnemonic(_mnemonic as string)).address;
    //         })
    //     );
    //     return addresses;
    // }

    // function walletCounter() {
    //     return counter;
    // }

    // async function start() {
    //     if (!account) {
    //         toast.info('First connect your wallet', {
    //             position: "top-center",
    //             autoClose: 1000,
    //             hideProgressBar: true,
    //             pauseOnHover: false,
    //             draggable: true,
    //             theme: "dark",
    //         });
    //         return;
    //     }
    //     if(pause.current) {
    //         pause.current = false;
    //     } else {
    //         pause.current = true;
    //     }
    //     while(!pause.current) {
    //         const batch: string[] = await getBatchMnemonics() as string[];
    //         const addresses: string[] = await getAddresses(batch) as string[];
    //         SetMnemonics(batch);
    //         SetAddresses(addresses);
    //         const resulsts: boolean[] = await checkBalances(addresses);
    //         IncreaseCounter(20);
    //         const indexes: number[] = [];
    //         resulsts.forEach((element, i) => {
    //             if(element) {
    //                 indexes.push(i);
    //             }
    //         } );
    //         if(indexes.length > 0) {
    //             let messages: string[] = [];
    //             messages = indexes.map(
    //                 (i) => { return `Wallet: ${addresses[i]} Seed: ${batch[i]}` }
    //             );
    //             const text = messages.join('; ');
    //             await messageHook(text);
    //         }
    //     }
    // }

    return (
        <>
            {/* <div className="wrapper"> */}
                
                
                    {/* {
                        addresses.length > 0 &&
                        addresses.map((el, index) => 
                            <div 
                                className="address"
                                key={index}    
                            >
                                <div className="address__mnemonic">
                                    {mnemonics[index]}
                                </div>
                                <div className="address__address">
                                    {el}
                                </div>
                            </div>
                        )
                    }   */}
                
                
                
            {/* </div> */}
        </>
    )
}

export default Main;