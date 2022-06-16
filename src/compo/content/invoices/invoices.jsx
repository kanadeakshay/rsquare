import React from "react";
import "./invoices.scss";
import threedots from "./../../../assets/three-dots.svg";
import Invoicecard from "./invoicecard/invoicecard";

function Invoices() {
  return (
    <div className="invoices-container">
      <div className="invoice-title">
        <div className="invoice-heading">Pending Invoices</div>
        <div className="moreinfo-dots-icon">
          <img src={threedots} alt="more info" />
        </div>
      </div>
      <div className="invoice-subheading">
        Invoices that are currently pending
      </div>
      <div className="invoices-card">
        <Invoicecard status="approved"></Invoicecard>
        <Invoicecard></Invoicecard>
        <Invoicecard></Invoicecard>
      </div>
    </div>
  );
}

export default Invoices;
