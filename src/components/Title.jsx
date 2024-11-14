/* eslint-disable react/prop-types */

export default function Title({ text1, text2 }) {
  return (
    <div
      className={`text-center sm:m-4 text-xl flex-wrap flex justify-center mb-2`}
    >
      <div className="flex gap-2 p-2 border-x-2">
        <h1 className="text-[#4d4d4d]">{text1} </h1>
        <h1>{text2}</h1>
      </div>
    </div>
  );
}
