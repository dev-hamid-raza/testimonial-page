import doneRing from './assets/images/Done_ring_round_fill.svg'
import googleLogo from './assets/images/google-testimonial.png'
import metaLogo from './assets/images/meta-testimonial.png'
import star from './assets/images/Star_fill.svg'
import starGray from './assets/images/Star_fill_gray.svg'
function App() {

  function Checked(prop) {
    return (
      <div className="container flex items-center">
        <div className="w-35">
          <img src={doneRing} alt="Done_ring_icon" className='w-full' />
        </div>
        <div className="w-full">
          <h3 className='text-sm'>{prop.text}</h3>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="app font-sora bg-white-200 py-32 px-8">
        <div className='sm:flex'>  {/* Main container */}
          <div className='sm:w-1/2 p-4'> {/* Left container */}
            <h1 className='bg-yellow w-10 h-10 rounded-full flex justify-center items-center'>⭐️</h1>
            <h1 className='text-4xl font-bold text-black-700 my-2'>Reviewers</h1>
            <p className='text-black-600 my-2 text-xl'>Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.</p>
            <div >
              <Checked text='Checklist to Review an Academic Paper' />
              <Checked text='Peer Review Checklist' />
              <Checked text='Checklist for Editors, Reviewers, and Authors of SPIE Journals' />
            </div>
          </div>
          <div className="sm:w-1/2 p-4">
          
          <div className="relative h-40 mt-3"> {/** --------- Card */}
            <div className="absolute w-72 rounded-lg  w-60 top-0 right-0 p-5 bg-white drop-shadow">
              <div className="flex items-center">  {/** row */}
                <div className="image mr-2">
                  <img src={googleLogo} alt="" className='w-16' />
                </div>
                <div className="flex items-center"> {/** row */}
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={starGray} alt="" />
                </div>
              </div>
                <h1 className='font-bold'>Samantha Lee</h1>
                <p>The checklist ensures that the review process is thorough</p>
            </div>    {/* Right Card */}
          </div> {/* Right container */} {/** --------- Card */}
          <div className="relative h-40 mt-3"> {/** --------- Card */}
            <div className="absolute w-72 rounded-lg top-0 left-0 p-5 bg-white drop-shadow">
              <div className="flex items-center">  {/** row */}
                <div className="image mr-2">
                  <img src={googleLogo} alt="" className='w-16' />
                </div>
                <div className="flex items-center"> {/** row */}
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={starGray} alt="" />
                </div>
              </div>
                <h1 className='font-bold'>Samantha Lee</h1>
                <p>The checklist ensures that the review process is thorough</p>
            </div>    {/* Right Card */}
          </div> {/* Right container */} {/** --------- Card */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
