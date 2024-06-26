import CodeBlock from "../CodeBlock";
export default function InputSearch() {
  const codeBlock = ` <div className="flex h-11 w-max">
  <input
    placeholder="Search..."
    className="0 peer rounded-l-xl border-[1px] 
    border-transparent bg-gray-800 px-3 
    py-2 outline-none duration-200 
    focus-within:border-[#24c295]"
    type="text"
    required />

  <button className="w-12 rounded-r-xl border-[1px]
     border-transparent bg-gray-900 
     text-[#24c295] outline-none 
     focus-visible:border-[#24c295] 
     peer-placeholder-shown:text-gray-300">
      <p className="-rotate-45 text-4xl">
      ⚲
      </p>
  </button>
</div>`;
  return (
    <>
      <div className="flex h-11 w-max">
        <input
          placeholder="Search..."
          className="0 peer rounded-l-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 outline-none duration-200 focus-within:border-[#24c295]"
          type="text"
          required
        />
        <button className="w-12 rounded-r-xl border-[1px] border-transparent bg-gray-900 text-[#24c295] outline-none focus-visible:border-[#24c295] peer-placeholder-shown:text-gray-300">
          <p className="-rotate-45 text-4xl">⚲</p>
        </button>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
