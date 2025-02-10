/* eslint-disable react/prop-types */

export default function PaymentOption({
  option,
  selectedPayment,
  setSelectedPayment,
}) {
  return (
    <button
      onClick={() => setSelectedPayment(option)}
      className={`p-2 border-2 flex gap-2 items-center ${
        selectedPayment.name === option.name ? "bg-gray-200" : ""
      }`}
    >
      {selectedPayment.name === option.name && (
        <div className={`w-3 h-3 rounded-full bg-green-700`}></div>
      )}
      {option.name}
    </button>
  );
}
