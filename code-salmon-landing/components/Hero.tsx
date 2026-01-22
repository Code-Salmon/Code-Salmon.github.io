// export default function Hero() {
//   return (
//     <section className="text-text text-center py-12 px-6">
//       <h1 className="text-[10rem] font-title mb-4 text-salmon text-red-450">CODE SALMON</h1>
//       <p className="text-[1.7rem] font-subheader mb-6 max-w-1xl mx-auto">
//       A Senior Dev's most trusted tool to fight Rest API Contract Drift!
//       </p>
//       <div className="flex justify-center gap-4">
//         <a
//           href="/documentation"
//           className="bg-salmon text-white px-6 py-3 rounded-lg font-semibold font-subheader hover:text-highlight transition"
//         >
//           Documentation
//         </a>
//         <a
//           href="https://github.com/OSP-54-2/codesalmon"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border border-border px-6 py-3 rounded-lg font-semibold  font-subheader hover:text-highlight transition"
//         >
//           GitHub Repo
//         </a>
//       </div>
//     </section>
//   );
// }


// Mobile Optimization
export default function Hero() {
  return (
    <section className="text-text text-center py-12 px-4 sm:px-6">
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-title mb-4 text-salmon text-red-450">
        CODE SALMON
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-[1.7rem] font-subheader mb-6 max-w-full sm:max-w-xl mx-auto px-4">
        A Senior Dev's most trusted tool to fight Rest API Contract Drift!
      </p>
      <div className="flex flex-row justify-center gap-2 sm:gap-4 px-4">
        <a
          href="/documentation.html"
          className="bg-salmon text-white px-4 sm:px-6 py-3 rounded-lg font-semibold font-subheader hover:text-highlight transition text-sm sm:text-base"
        >
          Documentation
        </a>
        <a
          href="https://github.com/OSP-54-2/codesalmon"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border px-4 sm:px-6 py-3 rounded-lg font-semibold font-subheader hover:text-highlight transition text-sm sm:text-base"
        >
          GitHub Repo
        </a>
      </div>
    </section>
  );
}