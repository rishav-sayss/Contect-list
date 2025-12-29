import React, { useState } from 'react'
function Card() {
    const [user, setuser] = useState("");
    const [useremail, setuseremail] = useState("");
    const [userphone, setuserphone] = useState("");
    let [alluser, setalluser] = useState([]);
    let formhandler = (e) => {
        e.preventDefault()
        setalluser([...alluser, { useremail, userphone, user }]);
        setuser("")
        setuseremail("")
        setuserphone("")
    }
    function close(index) {
        let olduser = [...alluser]
        olduser.splice(index, 1)
        setalluser(olduser)
    }
    return (
        <div  className="min-h-screen w-full bg-black  flex-1 p-3" >
            <form onSubmit={(e) => {
                formhandler(e)
            }}>
                <div className=' w-ful flex flex-col md:flex-row  gap-4 p-5 '>
                    <div className='w-[30%] 
                        flex flex-col gap-4 rounded-md p-3 bg-[#17171E] text-white'>
                        <h1 className=' text-[15px] font-bold '>Add Contect <i class="ri-contacts-book-3-fill"></i></h1>
                        <input required className=' border-none  w-full  border-b-gray-500  bg-[#101012] p-1    rounded-md  ' type="text" placeholder='Enter Name' value={user} onChange={(e) => setuser(e.target.value)} />
                        <input required className=' border-none   border-b-gray-500 bg-[#101012] p-1    rounded-md ' type="text" placeholder='Enter email' value={useremail} onChange={(e) => setuseremail(e.target.value)} />
                        <input required className=' border-none   border-b-gray-500] bg-[#101012] p-1    rounded-md ' type="text" placeholder='Enter number' value={userphone} onChange={(e) => setuserphone(e.target.value)} />
                        <button className=' bg-[#43505F] text-white font-bold py-1 rounded-md px-3 mt-1.5 click ring-2 ring-blue-500/50  shadow-[0_10px_30px_rgb(23, 23, 30)] hover:shadow-[0_20px_60px_rgb(16, 16, 18)] transition-shadow'>Save Contect</button>
                    </div>
                    <div className=' w-[67%] h-[60vh] lg:h-[67vh]  bg-[#17171E] rounded-md p-3 overflow-y-scroll shadow  scrollbar-hide'>
                        <div className=' w-full flex justify-between  '>
                            <h4 className=' text-white font-bold text-[15px] '>Saved Contect </h4>
                            <h5 className=' text-white font-bold text-[10px] count'>count  {alluser.length} </h5>
                        </div>
                        <div>
                            {
                                alluser.map((value, idx) => {

                                    return <div key={idx} index={idx} className=' relative mt-2 leading-5.5 text-white  contact-card   rounded-md px-5  py-2 bg-[#101012]  '>
                                        <h5 className=' text-[10px] font-medium'> {value.user} </h5>
                                        <p className=' ri-mail-open-line text-[10px] font-medium' > {value.useremail} </p>
                                        <p className=' ri-phone-line text-[10px] font-medium'> {value.userphone} </p>
                                        <div className='absolute top-3 right-3' >
                                            <button type="button" className='px-2 py-1 bg-[#a50606] rounded-md hover:bg-gray-600 cursor-pointer shadow-md hover:shadow-lg active:scale-95 transition-all ' onClick={() => { close(idx) }} >Close</button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Card
