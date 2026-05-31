import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
<p className="text-center mb-4 text-2xl text-black font-bold border-b border-black">People Who Trust Us</p>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Lorem Ipsum
              </h3>

              <p className="text-slate-400 mt-3">
              Lorem Ipsum si dolori amet.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Max Mustermann
              </h3>

              <p className="text-slate-400 mt-3">
                Mir gehen die Ideen für Platzhalter aus...
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Etwas Text
              </h3>

              <p className="text-slate-400 mt-3">
                Hier könnte ihre Webung stehen...
              </p>
            </div>

          </div>
        </div>
      </section>
       <Divider />
      <section className="my-10 mx-3 flex flex-col items-center">
       <p className="text-2xl font-bold text-black">Our Services</p>
       
       <ul className="list-style-type-disc">

      <li><p className="text-xl font-bold">Communication & Sales</p></li>
      <li><p className="text-lg font-bold"> 1stLine of Engagement</p></li>

 <li>To engage exhibitors as soon as possible</li>
<li>To confirm exhibitors’ participation</li>
 <li>To provide exhibitor’s manual</li>
<li>To provide hall & booth space layout</li>

 To confirm type of booth construction

 To process deposits for booth space booking

<li><p className="text-lg font-bold">2nd Line of Engagement</p></li>

 To promote Design & Build Services

 To assist with taking of design brief

 To assist with exhibition 
 To confirm type of booth constructionrelated matters

 To assist with any other requirements like travel
        
         </ul>
      </section>
    </>
  );
}
