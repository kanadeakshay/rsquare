import React, { startTransition } from "react";
import Avatar from "boring-avatars";
import dollaricon from "./../../../../assets/dollar-sign.svg";
import "./invoicecard.scss";

function Invoicecard(props) {
  const { status } = props;
  return (
    <div className="invoice-card">
      <div className="invoice-card-title">
        <div className="invoice-card-price">
          <img src={dollaricon} alt="dollar icon" />
          <span>137.00</span>
        </div>
      </div>
      <div className="status-amountTxt">
        <div className="amount-txt">Amount</div>

        <div
          className={
            status === "approved"
              ? "invoice-status approved"
              : "invoice-status pending"
          }
        >
          {status === "approved" ? <div>Approved</div> : <div>Pending</div>}
        </div>
      </div>
      <div className="person-timestamp">
        <Avatar
          size={40}
          name="doms"
          variant="bauhaus"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div className="person-name-timestamp">
          <div className="person-name">Erin Gozanles</div>
          <div className="timestamp">
            <span className="invoice-id">#552</span>
            <span className="invoice-date">Date: 25 may</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoicecard;
