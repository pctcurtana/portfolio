export default function () {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 w-sm sm:w-2xl h-10 border-x border-t mt-4 border-white/50 rounded-t-xl">
                <p className="h-4 w-4 bg-red-500 rounded-full ml-2"></p>
                <p className="h-4 w-4 bg-amber-400 rounded-full"></p>
                <p className="h-4 w-4 bg-green-500 rounded-full"></p>
            </div>
            <div className="w-sm sm:w-2xl h-100 border border-white/50 rounded-b-xl p-4 text-sm  font-fira-code">
                <p className="text-white"> {'>'} npm install package ...</p>
                <p className="text-green-500">contact through my facebook </p>
           </div>
        </div>
    )
}