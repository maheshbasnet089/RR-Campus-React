

// component --> just function that returns jsx code 
// rule : component name always PascalCase 

import Navbar from "./components/Navbar"


function Home(){
    return(
        <div>
        <Navbar />

<div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8  p-4">
    {/* card  */}
    <div className="cont h-42 rounded-lg bg-violet-700 shadow shadow-xl ">
      <h1 className="pt-12 p-4 text-2xl text-white font-bold ">Data card Titre</h1>
      <p className="p-4 pt-0 text-white text-sm">
        The dialog element is only supported in Chrome 37+, Safari 6+ and Opera 24+.The dialog element is only supported
        in Chrome 37+, Safari 6+ and Opera 24+.
      </p>
      <button className="pt-0 p-4 flex gap-1 text-gray-100 hover:gap-2 ">Next 
        {/* svg */}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#f1f1f1f1', transform: '', msfilter: ''}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" /></svg>
      </button>
    </div>
    {/* end card  */}
    {/* card  */}
    <div className="cont h-42 rounded-lg bg-violet-700 shadow shadow-xl ">
      <h1 className="pt-12 p-4 text-2xl text-white font-bold ">Data card Titre</h1>
      <p className="p-4 pt-0 text-white text-sm">
        The dialog element is only supported in Chrome 37+, Safari 6+ and Opera 24+.The dialog element is only supported
        in Chrome 37+, Safari 6+ and Opera 24+.
      </p>
      <button className="pt-0 p-4 flex gap-1 text-gray-100 hover:gap-2 ">Next 
        {/* svg */}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#f1f1f1f1', transform: '', msfilter: ''}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" /></svg>
      </button>
    </div>
    {/* end card  */}
    {/* card  */}
    <div className="cont h-42 rounded-lg bg-violet-700 shadow shadow-xl ">
      <h1 className="pt-12 p-4 text-2xl text-white font-bold ">Data card Titre</h1>
      <p className="p-4 pt-0 text-white text-sm">
        The dialog element is only supported in Chrome 37+, Safari 6+ and Opera 24+.The dialog element is only supported
        in Chrome 37+, Safari 6+ and Opera 24+.
      </p>
      <button className="pt-0 p-4 flex gap-1 text-gray-100 hover:gap-2 ">Next 
        {/* svg */}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#f1f1f1f1', transform: '', msfilter: ''}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" /></svg>
      </button>
    </div>

  </div>
  <p />
</div>

        </div>




    )
}



export default Home // only one export 




