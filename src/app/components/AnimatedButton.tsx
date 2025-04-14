// import React from "react";

// const AnimatedButton: React.FC = () => {
//   return (
//     <button className="btn flex items-center justify-center h-16 w-48 bg-transparent border-0 cursor-pointer font-sans font-bold rounded-lg">
//       <div className="relative h-8 w-32 flex justify-center items-center">
//         <p className="text-lg z-10 text-[#365F36] px-3 py-1 bg-white/70 rounded transition-none">
//           رؤية
//         </p>

//         {/* Flower 1 */}
//         <div className="flower flower1 grid grid-cols-2 absolute top-[-12px] left-[-13px] transform rotate-[5deg] transition-none">
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-90"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-[270deg]"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-180"></div>
//         </div>

//         {/* Flower 2 */}
//         <div className="flower flower2 grid grid-cols-2 absolute bottom-[-5px] left-2 transform rotate-[35deg] transition-none">
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-90"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-[270deg]"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-180"></div>
//         </div>

//         {/* Flower 3 */}
//         <div className="flower flower3 grid grid-cols-2 absolute bottom-[-15px] transform rotate-0 transition-none">
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-90"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-[270deg]"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-180"></div>
//         </div>

//         {/* Flower 4 */}
//         <div className="flower flower4 grid grid-cols-2 absolute top-[-14px] transform rotate-[15deg] transition-none">
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-90"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-[270deg]"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-180"></div>
//         </div>

//         {/* Flower 5 */}
//         <div className="flower flower5 grid grid-cols-2 absolute right-3 top-[-3px] transform rotate-[25deg] transition-none">
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-90"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-[270deg]"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-180"></div>
//         </div>

//         {/* Flower 6 */}
//         <div className="flower flower6 grid grid-cols-2 absolute right-[-15px] bottom-[-15px] transform rotate-[30deg] transition-none">
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-90"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-[270deg]"></div>
//           <div className="h-4 w-4 bg-[#365F36] border border-[#365F36] rounded-[40%_70%_/_7%_90%] z-0 transition-all transform rotate-180"></div>
//         </div>
//       </div>

//       {/* Add the animation styles */}
//       <style jsx>{`
//         @keyframes flower1 {
//           0% {
//             transform: rotate(5deg);
//           }
//           100% {
//             transform: rotate(365deg);
//           }
//         }
//         @keyframes flower2 {
//           0% {
//             transform: rotate(35deg);
//           }
//           100% {
//             transform: rotate(-325deg);
//           }
//         }
//         @keyframes flower3 {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes flower4 {
//           0% {
//             transform: rotate(15deg);
//           }
//           100% {
//             transform: rotate(375deg);
//           }
//         }
//         @keyframes flower5 {
//           0% {
//             transform: rotate(25deg);
//           }
//           100% {
//             transform: rotate(-335deg);
//           }
//         }
//         @keyframes flower6 {
//           0% {
//             transform: rotate(30deg);
//           }
//           100% {
//             transform: rotate(390deg);
//           }
//         }

//         .btn:hover .flower1 {
//           animation: flower1 15s linear infinite;
//         }
//         .btn:hover .flower2 {
//           animation: flower2 13s linear infinite;
//         }
//         .btn:hover .flower3 {
//           animation: flower3 16s linear infinite;
//         }
//         .btn:hover .flower4 {
//           animation: flower4 17s linear infinite;
//         }
//         .btn:hover .flower5 {
//           animation: flower5 20s linear infinite;
//         }
//         .btn:hover .flower6 {
//           animation: flower6 15s linear infinite;
//         }
//       `}</style>
//     </button>
//   );
// };

// export default AnimatedButton;