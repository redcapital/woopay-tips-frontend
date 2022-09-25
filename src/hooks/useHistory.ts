import { useState, useEffect } from "react";
import { client } from "../xhr";

export default function useHistory() {
  const [history, setHistory] = useState<any[]>();
  useEffect(() => {
    try {
      client.get("/history").then((response) => {
        if (response && response.data) {
          setHistory(response.data);
        }
      });
    } catch (e) {}
  }, []);

  return history;
}
