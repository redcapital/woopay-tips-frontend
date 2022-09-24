import React, { useEffect, useState } from "react";
import { toCanvas, toDataURL } from "qrcode";

export interface Props {
  text: string;
}

const QRCode: React.FC<Props> = ({ text }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    toDataURL(text, (err, dataURL) => {
      if (dataURL) {
        setUrl(dataURL);
      }
    });
  }, [text]);

  if (!url) {
    return null;
  }

  return <img style={{ width: "100%", maxWidth: "300px" }} src={url} />;
};
QRCode.displayName = "QRCode";

export default QRCode;
