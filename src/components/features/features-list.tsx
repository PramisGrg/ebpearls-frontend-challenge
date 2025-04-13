import { featuresData } from "../../data/features-data";
import { motion } from "framer-motion";
import { featureAnimations } from "../../animations/feature-animation";

const FeaturesList = () => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4">
      {featuresData.map((feature, i) => (
        <motion.li
          variants={featureAnimations}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          key={feature.id}
        >
          <article className="border border-neutral-200 p-10 rounded-lg hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center gap-4">
              <span className="bg-primary p-4 rounded-full">
                <feature.icon className="text-white w-8 h-8 shrink-0" />
              </span>
              <div>
                <h3 className="text-lg text-center font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-center text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </article>
        </motion.li>
      ))}
    </ul>
  );
};

export default FeaturesList;
