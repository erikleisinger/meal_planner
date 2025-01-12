export default function Modal({isOpen, close, children}: {isOpen: boolean, close: () => void, children: React.ReactNode}) {
    return (
        <>
        {
            isOpen &&  <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <div className="absolute inset-0" onClick={close}></div>
            
            <div className="bg-white  rounded-md absolute m-auto max-w-[90vw] w-[500px] max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
         
                {children}
                </div>
          

        </div>
        }
    
        </>
    )
}