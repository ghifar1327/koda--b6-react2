function CounterButton({ onClick, className, children }) {
  return (
    <button onClick={onClick}className={`flex justify-center items-center w-20 text-5xl rounded-xl ${className}`}>
      <p className="pb-2 font-semibold">{children}</p>
    </button>
  );
}

export default CounterButton;
