import Image from "next/image";
import React from "react";

const MockupSection = () => {
  return (
    <div className="mockup_section">
      <div>
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
      </div>
      <div>
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
      </div>
      <div className="main_mockup">
        <Image src="/health.jpg" width={100} height={500} />
      </div>
      <div>
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
      </div>
      <div>
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
        <Image src="/health.jpg" width={100} height={500} />
      </div>
    </div>
  );
};

export default MockupSection;
