import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import M from "./muneebkhanSVGs/M";
import DOT from "./muneebkhanSVGs/DOT";
import S from "./muneebkhanSVGs/S";
import H from "./muneebkhanSVGs/H";
import E from "./muneebkhanSVGs/E";
import R from "./muneebkhanSVGs/R";
import O from "./muneebkhanSVGs/O";
import Z from "./muneebkhanSVGs/Z";


const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`mk-muneeb-khan-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function MuneebKhan({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight/2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`mk-muneeb-khan ${mount ? 'mk-muneeb-khan-visible' : ''}`}>
      <SvgWrapper
        className="mk_svg_M"
        SVG={M}
      />
      <SvgWrapper
        className="mk_svg_DOT"
        SVG={DOT}
      />
      <SvgWrapper
        className="mk_svg_S"
        SVG={S}
      />
      <SvgWrapper
        className="mk_svg_H"
        SVG={H}
      />
      <SvgWrapper
        className="mk_svg_E"
        SVG={E}
      />
      <SvgWrapper
        className="mk_svg_R"
        SVG={R}
      />
      <SvgWrapper
        className="mk_svg_O"
        SVG={O}
      />
      <SvgWrapper
        className="mk_svg_Z"
        SVG={Z}
      />
    </div>
  )
}
