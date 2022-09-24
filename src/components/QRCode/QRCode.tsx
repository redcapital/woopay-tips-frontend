import React, { useEffect, useRef } from "react";
import { toCanvas } from "qrcode";

export interface Props {
  text: string;
}

const QRCode: React.FC<Props> = ({ text }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (ref.current) {
      toCanvas(ref.current, text);
    }
  }, [ref.current, text]);

  return <canvas ref={ref}></canvas>;
};
QRCode.displayName = "QRCode";

export default QRCode;
