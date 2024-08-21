import React from 'react'; 
 import {Link} from 'react-router-dom'; 
 
    const Component0 = () => { return <header
  ref={{
    current: '[Circular]'
  }}
  className="text-gray-400  body-font"
  onClick={function x(){}}
>
  <div className="editable-component-hover ">
    <div className="pl-4" />
    <div
      className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      style={{}}
    >
      <a
        className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        href
      >
        <div
          className="w-10 h-10 p-2 bg-slategrey-500 rounded-full"
          style={{}}
        >
          <img
            alt="Logo"
            className="w-full h-full object-contain"
            src="https://reactui-builder.com/favicon.ico"
          />
        </div>
        <span
          className="ml-3 text-xl"
          style={{
            marginBottom: 0,
            marginLeft: 10,
            marginRight: 0,
            marginTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0
          }}
        >
          Syed Hamza Hoda
        </span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link
          className="mr-5 hover:text-white"
          style={{}}
          to="#"
        >
          First link
        </Link>
        <Link
          className="mr-5 hover:text-white"
          style={{}}
          to="#"
        >
          Second link
        </Link>
        <Link
          className="mr-5 hover:text-white"
          style={{}}
          to="#"
        >
          Third link
        </Link>
        <Link
          className="mr-5 hover:text-white"
          style={{}}
          to="#"
        >
          Fourth link
        </Link>
        <Link
          className="mr-5 hover:text-white"
          style={{}}
          to="#"
        >
          <button
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base "
            style={{}}
          >
            Button
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
        <Link
          className="mr-5 hover:text-white"
          style={{}}
          to="#"
        >
          <button
            className="mode"
            onClick={undefined}
          />
        </Link>
      </nav>
    </div>
  </div>
</header> }; 
 export default Component0 