export default function Accordion(props: any) {
  return (
    <div className="border border-green-800 rounded-md mb-1">
      <button
        className={`w-full p-4 text-left bg-gray-900 text-xl rounded-md hover:bg-gray-700 transition duration-300 ${
          props.isOpen ? "text-green-500" : "text-white"
        }`}
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="p-4 bg-black rounded-b-md">{props.data}</div>
      )}
    </div>
  );
}
