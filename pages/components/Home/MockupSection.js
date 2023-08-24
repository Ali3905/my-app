import Image from "next/image";
import React from "react";

const MockupSection = () => {
  return (
    <div className="mockup_section">
      <div>
        <Image src="/@1.jpg" width={100} height={500} />
        <Image src="/@2.avif" width={100} height={500} />
        <Image src="/@3.avif" width={100} height={500} />
      </div>
      <div>
        <Image src="/@4.avif" width={100} height={500} />
        <Image src="/@5.avif" width={100} height={500} />
        <Image src="/@6.jpg" width={100} height={500} />
      </div>
      <div className="main_mockup">
        <Image src="/health.jpg" width={100} height={500} />
      </div>
      <div>
        <Image src="/@7.jpeg" width={100} height={500} />
        <Image src="/@1.jpg" width={100} height={500} />
        <Image src="/@2.avif" width={100} height={500} />
      </div>
      <div>
        <Image src="/@3.avif" width={100} height={500} />
        <Image src="/@4.avif" width={100} height={500} />
        <Image src="/@5.avif" width={100} height={500} />
      </div>
    </div>
  );
};

export default MockupSection;
