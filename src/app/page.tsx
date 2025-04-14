
import Footer from "../app/components/layout/Footer";
import Header from "../app/components/layout/Header";
import HeroSection from "../app/components/HeroSection";
import Martyrs from "../app/components/Martyrs";
import ShareStory from "../app/components/ShareStory";

import Slider from "../app/components/Slider";
import StoriesSection from "../app/components/StoriesSection";
import UpdatedStories from "../app/components/UpdatedStories";
 

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <Header/>
      {/* قسم الهيرو */}
     
      <HeroSection />
      <div >
        <Slider />
      </div>
   
      {/* سكشن القصص */}
      <div className="  mt-[300px] ">
        <StoriesSection />
      </div>
      <div>
        <Martyrs/>
       </div>
      <div>
      <UpdatedStories/>
      </div>
     
      <div>
      <ShareStory/>
      </div>

     <Footer/>
    </main>
  );
}




// Organize imports by category and alphabetically
// Layout components
// import Footer from "@/components/layout/Footer"
// import Header from "@/components/layout/Header"

// // Page sections
// import HeroSection from "@/components/sections/HeroSection"
// import Martyrs from "@/components/sections/Martyrs"
// import ShareStory from "@/components/sections/ShareStory"
// import Slider from "@/components/sections/Slider"
// import StoriesSection from "@/components/sections/StoriesSection"
// import UpdatedStories from "@/components/sections/UpdatedStories"

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="mb-12">
//           <HeroSection />
//         </section>

//         {/* Slider Section */}
//         <section className="mb-12">
//           <Slider />
//         </section>

//         {/* Stories Section */}
//         <section className="mb-12">
//           <StoriesSection />
//         </section>

//         {/* Martyrs Section */}
//         <section className="mb-12">
//           <Martyrs />
//         </section>

//         {/* Updated Stories Section */}
//         <section className="mb-12">
//           <UpdatedStories />
//         </section>

//         {/* Share Story Section */}
//         <section className="mb-12">
//           <ShareStory />
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }
