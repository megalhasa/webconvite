function Buttonbox() {
    return (
        <>
            <div className='flex flex-col space-y-1 mt-10'>

                <div
                className='h-30 w-60 flex items-center content-center
                bg-[url(./src/assets/images/bt-paper.png)]
                bg-cover bg-center bg-no-repeat
                font-bold text-xl justify-center'
                >
                    <h1 className='pr-2 pb-3'>SIM</h1>
                </div>

                <div
                className='h-30 w-60 flex items-center content-center
                bg-[url(./src/assets/images/bt-paper.png)]
                bg-cover bg-center bg-no-repeat
                font-bold text-xl justify-center'
                >
                    <h1 className='pr-2 pb-3'>!SIM</h1>
                </div>

            </div>
        </>
    )
}

export default Buttonbox