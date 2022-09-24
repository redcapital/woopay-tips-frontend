import React from "react";
import usePaymentFrameHandler from "../../../hooks/usePaymentFrameHandler";
import "./PaymentFrame.css";

export interface Props {
  url: string;
  onSuccess: () => void;
}

const PaymentFrame: React.FC<Props> = ({ url, onSuccess }) => {
  usePaymentFrameHandler(onSuccess);
  return (
    <div className="payment-frame-container">
      <iframe className="payment-frame" title="Payment" src={url} />
    </div>
  );
};
PaymentFrame.displayName = "PaymentFrame";

export default PaymentFrame;
