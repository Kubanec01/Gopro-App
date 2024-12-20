import image1 from "../../../assets/watch-app-img.png";
import image2 from "../../../assets/phone-app-img.png";
import image3 from "../../../assets/platforms-img.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Application() {
  const { t } = useTranslation();

  return (
    <div
      id="application"
      style={{
        scrollMarginTop: "12.5rem",
      }}
      className="w-full lg:mt-[12.5rem] mt-[8.75rem] p-4"
    >
      <div className="max-w-[1200px] mx-auto lg:flex justify-between">
        {/* TEXT AND BUTTONS */}
        <div className="lg:w-[210%] md:mt-[6.25rem] mt-[2.25rem] lg:ml-0 md:ml-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:text-4xl md:text-4xl text-3xl lg:w-full mb-[0.625rem] md:w-[50%] text-white relative
          before:bg-[#ffffff8a] before:w-[30%] before:h-[0.125rem] before:absolute before:-top-8 before:left-0 before:rounded-xl"
          >
            {t("home.appTitle")}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:text-xl md:text-xl text-md lg:w-full md:w-[70%] w-[86%] text-[#ffffff8a] relative
          after:bg-[#ffffff8a] after:w-[80%] after:h-[0.125rem] after:absolute after:-bottom-8 after:left-0 after:rounded-xl"
          >
            {t("home.appDesc")}
          </motion.p>
          <div className="lg:mt-[5rem] mt-[3rem] md:-ml-[1.875rem] -ml-[1.2rem]">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="object-cover lg:mb-0 mb-[2.5rem] md:w-[16.25rem] w-[12rem] opacity-90"
              src={image3}
              alt="app-platforms-img"
            />
          </div>
        </div>
        {/* IMAGES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-end justify-end lg:mr-0 md:mr-12"
        >
            {/* WATCH IMG */}
          <div className="mr-[2%]">
            <img
              className="object-contain lg:w-[1000px] w-[220px] opacity-95"
              src={image1}
              alt="watch-img"
            />
          </div>
            {/* PHONE IMG */}
          <div>
            <img
              className="object-contain lg:w-[1200px] w-[250px] opacity-95"
              src={image2}
              alt="phone-img"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
