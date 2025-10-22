import React, { useState } from "react";
import emailjs from "emailjs-com";
import './TruckOrderForm.css';
import { useRef } from "react";

export default function TruckOrderForm({
  truck,
  basePrice,
  onOrderPlaced,
})
{
  const COLORS = ["red", "blue", "white", "black"];
const PAYLOADS = ["1 ton", "3 tons", "5 tons"];
const TRANSMISSIONS = ["Automatic", "Manual"];
const SHIPPING = [
  { label: "Standard (1-4 days)", value: "standard" },
  { label: "Express (1-2 days)", value: "express" },
  { label: "Select Date", value: "date" },
];
    const today = new Date().toISOString().split("T")[0];
const PAYMENT_METHODS = [
  "Bank Transfer",
  "In-Person Payment",
  "Check Payment",
  "Loan or Installment",
];
  const [color, setColor] = useState(COLORS[0]);
  const [payload, setPayload] = useState(PAYLOADS[0]);
  const [transmission, setTransmission] = useState(TRANSMISSIONS[0]);
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState(SHIPPING[0].value);
  const [shippingDate, setShippingDate] = useState("");
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerId, setCustomerId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [sending, setSending] = useState(false);
  const formRef = useRef();
  const unitPrice =
    (basePrice || 0) +
    (payload === "3 tons" ? 50000 : payload === "5 tons" ? 100000 : 0) +
    (transmission === "Automatic" ? 25000 : 0);

  const totalPrice = unitPrice * quantity;

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
    setPaymentDetails("");
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setShowCustomerForm(true);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setSending(true);

    const SERVICE_ID = "service_hhwzshz";
    const TEMPLATE_ID = "template_s6685d8";
    const USER_ID = "OMnRruT1S-TVzXGJ-";


    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID) .then((response) => { alert('Order placed successfully! An invoice has been sent to your email.'); setOrderConfirmed(true); // Show confirmation message 
    setShowCustomerForm(false); // Close the popup 
    setSending(false); 
    if (onOrderPlaced) onOrderPlaced({ customerName, customerEmail }); }, (error) => { setSending(false); alert('Failed to send invoice. Please try again.'); }); };

    
  return (
    <div className="truck-order-form">
      <h3>Price Per Unit: ₱{unitPrice.toLocaleString()}</h3>
      <h2>Total Price: ₱{totalPrice.toLocaleString()} </h2>
      <form onSubmit={handleCheckout}>
        <fieldset>
          <legend>Specifications</legend>
          <div>
            <label>Body Color:</label>
            {COLORS.map((c) => (
              <label key={c} style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  name="color"
                  value={c}
                  checked={color === c}
                  onChange={() => setColor(c)}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: 16,
                    height: 16,
                    background: c,
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    marginLeft: 4,
                  }}
                ></span>
              </label>
            ))}
          </div>
          <div>
            <label>Payload Capacity:</label>
            {PAYLOADS.map((p) => (
              <label key={p} style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  name="payload"
                  value={p}
                  checked={payload === p}
                  onChange={() => setPayload(p)}
                />
                {p}
              </label>
            ))}
          </div>
          <div>
            <label>Transmission Type:</label>
            {TRANSMISSIONS.map((t) => (
              <label key={t} style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  name="transmission"
                  value={t}
                  checked={transmission === t}
                  onChange={() => setTransmission(t)}
                />
                {t}
              </label>
            ))}
          </div>
          <div>
            <label>
              Quantity of Units:
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: 25, height: 25, marginRight: 0, paddingLeft: 10, paddingBottom: 23   }}
                  aria-label="Decrease quantity"
                >
                  ▼
                </button>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={quantity}
                  readOnly
                  style={{ width: 50, textAlign: "center" }}
                />
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  style={{ width: 25, height: 25, marginLeft: 4, paddingLeft: 10, paddingBottom: 23}}  
                  aria-label="Increase quantity"
                >
                  ▲
                </button>
              </div>
            </label>
          </div>
          <div>
            <label>Shipping Option:</label>
            {SHIPPING.map((s) => (
              <label key={s.value} style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  name="shipping"
                  value={s.value}
                  checked={shipping === s.value}
                  onChange={() => setShipping(s.value)}
                />
                {s.label}
              </label>
            ))}
{shipping === "date" && (
  <input
    type="date"
    min={today}
    value={shippingDate}
    onChange={(e) => setShippingDate(e.target.value)}
    style={{ marginLeft: 10 }}
  />
)}

          </div>
        </fieldset>
        <button type="submit" style={{ marginTop: 16 }}>
          Checkout
        </button>
      </form>

      {showCustomerForm && (
        <div className="truck-order-popup">
          <form ref={formRef} onSubmit={handlePlaceOrder} style={{ position: "relative" }}>
            <button
              type="button"
              className="truck-order-popup-cancel"
              onClick={() => setShowCustomerForm(false)}
              aria-label="Cancel"
            >
              ×
            </button>

             <input type="hidden" name="truck_model" value={truck?.description || ""} />
  <input type="hidden" name="truck_details" value={truck?.Details || ""} />
  <input type="hidden" name="totalprice" value={totalPrice} />
  <input type="hidden" name="unitprice" value={unitPrice} />
  <input type="hidden" name="quantity" value={quantity} />
  <input type="hidden" name="color" value={color} />
  <input type="hidden" name="payload" value={payload} />
  <input type="hidden" name="transmission" value={transmission} />
  <input type="hidden" name="shipping" value={shipping === "date" ? shippingDate : shipping} />

            <h3>Order Details</h3>
            <div>
              <label>
                Customer Name:
                <input
                  type="text"
                  name="customer_name"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Customer Address:
                <input
                  type="text"
                  name="customer_address"
                  required
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Customer Email:
                <input
                  type="email"
                  name="customer_email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Customer ID:
                <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={(e) => setCustomerId(e.target.files[0])}
                />
              </label>
            </div>
            <div>
              <label>Payment Method:</label>
              {PAYMENT_METHODS.map((method) => (
                <label key={method} style={{ marginRight: 10 }}>
                  <input
                    type="checkbox"
                    name="payment_method"
                    value={method}
                    checked={paymentMethod === method}
                    disabled={paymentMethod && paymentMethod !== method}
                    onChange={() => handlePaymentMethod(method)}
                  />
                  {method}
                </label>
              ))}
              {paymentMethod && (
                <div>
                  <label>
                    Payment Details:
                    <input
                      type="text"
                      name="payment_details"
                      required
                      value={paymentDetails}
                      onChange={(e) => setPaymentDetails(e.target.value)}
                      placeholder={`Enter ${paymentMethod} details`}
                    />
                  </label>
                </div>
              )}
            </div>
            <button type="submit" style={{ marginTop: 16 }} disabled={sending}>
              {sending ? "Sending..." : "Place Order"}
            </button>
          </form>
        </div>
      )}
      {orderConfirmed && (
        <div className="truck-order-confirmation">
          <div className="truck-order-confirmation-box">
            <h3>Order Placed Successfully!</h3>
            <p>Your invoice has been sent to <b>{customerEmail}</b>.<br />
            Your order is now under processing.</p>
            <button
              type="button"
              onClick={() => setOrderConfirmed(false)}
              style={{ marginTop: 16 }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}