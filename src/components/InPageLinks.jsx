import { useState, useEffect } from "react"

export default function InPageLinks() {
    const [section1active, setSection1Active] = useState(true);
    const [section2active, setSection2Active] = useState(false);
    const [section3active, setSection3Active] = useState(false);;
    const [currentSection, setCurrentSection] = useState("section1");

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            handleCategory(event);
        }, []);
    })

    function hover1set() {
        setSection1Active(true);
    }
    
    function hover1unset() {
        if (currentSection !== "section1") {
            setSection1Active(false);
        }
    }
    
    function hover2set() {
        setSection2Active(true);
    }
    
    function hover2unset() {
        if (currentSection !== "section2") {
            setSection2Active(false);
        }
    }
    
    function hover3set() {
        setSection3Active(true);
    }

    function hover3unset() {
        if (currentSection !== "section3") {
            setSection3Active(false);
        }
    }
  

    const handleCategory = (e) => {
        if (document.readyState === "complete") {
            let section1Position = document.getElementById("section1").offsetTop;
            let section2Position = document.getElementById("section2").offsetTop;
            let section3Position = document.getElementById("section3").offsetTop;

            if (window.scrollY <= section1Position) {
                setCurrentSection("section1");
                setSection1Active(true);
                setSection2Active(false);
                setSection3Active(false);
            }
            
            if (window.scrollY > section2Position && window.scrollY < section3Position) {
                setCurrentSection("section2");
                setSection1Active(false);
                setSection2Active(true);
                setSection3Active(false);
            } 
            
            if (window.scrollY >= section3Position) {
                setCurrentSection("section3");
                setSection1Active(false);
                setSection2Active(false);
                setSection3Active(true);
            }
        }
    }

  return (
    <div className="hidden md:block">
        <ul className="mt-10 space-y-1">
            <li onMouseOver={hover1set} onMouseOut={hover1unset}>
                <a href="#section1" id="sec1Link" className={`items-center flex`}>
                    <hr className={`${section1active? 'w-16 bg-white h-[2px]':'w-8 h-[1px] bg-subtleText'} border-0 transition-all motion-reduce:transition-none`} />
                    <span className={`ml-4 ${section1active? 'text-white':'text-subtleText'}`}>ABOUT</span>
                </a>
            </li>
            <li onMouseOver={hover2set} onMouseOut={hover2unset}>
                <a href="#section2" id="sec2Link" className={`items-center flex`}>
                    <hr className={`${section2active? 'w-16 bg-white h-[2px]':'w-8 h-[1px] bg-subtleText'} border-0 transition-all motion-reduce:transition-none`} />
                    <span className={`ml-4 ${section2active? 'text-white':'text-subtleText'}`}>EXPERIENCE</span>
                </a>
            </li>
            <li onMouseOver={hover3set} onMouseOut={hover3unset}>
                <a href="#section3" id="sec3Link" className={`items-center flex`}>
                    <hr className={`${section3active? 'w-16 bg-white h-[2px]':'w-8 h-[1px] bg-subtleText'} border-0 transition-all motion-reduce:transition-none`} />
                    <span className={`ml-4 ${section3active? 'text-white':'text-subtleText'}`}>TEMP</span>
                </a>
            </li>
        </ul>
    </div>
  )
}