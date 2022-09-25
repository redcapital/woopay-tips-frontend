import { useState, useEffect } from "react";
import { client } from "../xhr";

export default function useBalance() {
  const [balance, setBalance] = useState<number>();
  useEffect(() => {
    try {
      client.get("/balance").then((response) => {
        if (response && response.data && response.data.acc_base) {
          setBalance(response.data.acc_base);
        }
      });
    } catch (e) {}
  }, []);

  return balance;
}
