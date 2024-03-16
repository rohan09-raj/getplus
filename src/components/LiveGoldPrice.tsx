"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LiveGoldPrice() {
  const [liveGoldPrice, setLiveGoldPrice] = useState(0);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://proapi.getplus.in/api/v1/jewellers/rates"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch rates");
        }
        const data = await response.json();
        setLiveGoldPrice(data.gold_buy);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 60 : prevTimer - 1));
    }, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <section className="w-[335px] h-24 fixed bottom-10 right-10 md:bottom-3 md:right-3 z-20 sm:w-[250px]">
      <div className="flex items-center gap-4 bg-[#FFF3DD] px-4 py-2 rounded-t-md sm:gap-1">
        <Image
          src="https://storage.googleapis.com/getplus.in/images/live_bracket_blinker.png"
          alt="Live Gold Price"
          height={18}
          width={18}
        />
        <p className="text-sm text-[#212529] font-semibold mr-8 sm:text-xs sm:mr-2">
          Live Gold Price
        </p>
        <p className="text-sm text-[#FF0000] font-semibold sm:text-xs">
          Valid For: {timer} sec
        </p>
      </div>
      <div className="flex items-center p-4 justify-between bg-gradient-to-br from-[#F8EEB8] to-[#EECC93] rounded-b-md">
        <Image
          src="https://storage.googleapis.com/getplus.in/images/gold_live_rate_blocks.png"
          alt="Live Gold Price"
          height={25}
          width={40}
        />
        <p className="text-sm text-[#141414CC] font-semibold sm:text-xs">
          99.9% | 24K:{" "}
          <span className="text-lg text-[#141414CC] font-semibolds sm:text-base">
            ₹{liveGoldPrice}/gm
          </span>
        </p>
      </div>
    </section>
  );
}
