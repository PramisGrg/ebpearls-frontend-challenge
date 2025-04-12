import React from "react";
import { footerData } from "../../data/footer-data";

const FooterItems = () => {
  return (
    <section className="lg:flex space-y-12 justify-between">
      {footerData.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <header className="font-semibold text-neutral-700">
            {item.title}
          </header>

          <ul className="space-y-4 cursor-pointer">
            {item.subItems.map((subItem, index) => (
              <li className="text-neutral-500" key={index}>
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default FooterItems;
