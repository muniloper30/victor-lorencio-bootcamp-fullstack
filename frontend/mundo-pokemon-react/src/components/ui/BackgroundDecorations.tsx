export const BackgroundDecorations = () => {
    return(
         <>
      {/* Mejillas pikachu */}
      <div className="fixed bottom-0 left-0 w-[150px] h-[150px] bg-red-500 rounded-full -translate-x-1/2 translate-y-1/2 -z-10" />
      <div className="fixed bottom-0 right-0 w-[150px] h-[150px] bg-red-500 rounded-full translate-x-1/2 translate-y-1/2 -z-10" />

      {/* Orejas pikachu*/}
      <div className="fixed top-0 left-0 w-[100px] h-[100px] bg-black rotate-45 -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="fixed top-0 right-0 w-[100px] h-[100px] bg-black rotate-45 translate-x-1/2 -translate-y-1/2 -z-10" />
    </>
    )
}