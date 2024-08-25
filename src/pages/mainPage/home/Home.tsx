import { useTranslation } from "react-i18next";
import image1 from "../../../assets/gopro1-img.png";
import image2 from "../../../assets/gopro2-img.png";
import sparkImg from "../../../assets/spark-img.png";
import { motion } from "framer-motion";
import { Experiences } from "./Experiences";
import { Accessories } from "./accessories/Accessories";
import { NewProduct } from "./newProduct/NewProduct";
import { Application } from "./Application";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="mt-14 flex justify-center flex-col items-center">
      <div className="h-[43.75rem] w-[90%] max-w-[1500px] flex justify-between">
        {/* IMAGE 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="w-[50%] flex justify-center items-center relative"
        >
          <img
            className="h-[37.5rem] aspect-square object-cover z-50"
            src={image1}
            alt="gopro-img1"
          />
          <img
            className="absolute w-[31.25rem] top-[2.5rem] left-[-2.5rem] opacity-5"
            src={sparkImg}
            alt="spark img"
          />
          <img
            className="absolute w-[18.75rem] bottom-[5rem] right-[3.75rem] opacity-5"
            src={sparkImg}
            alt="spark img"
          />
        </motion.div>
        {/* IMAGE 2 */}
        <div className=" w-[50%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" flex justify-center items-center mt-[3.75rem] relative"
          >
            <img
              className="h-[25rem] object-cover z-50"
              src={image2}
              alt="gopro-img2"
            />
            <img
              className="absolute w-[31.25rem] top-[2.5rem] left-[-0.625rem] opacity-5"
              src={sparkImg}
              alt="spark img"
            />
            <img
              className="absolute w-[18.75rem] bottom-[5rem] right-[1.875rem] opacity-5"
              src={sparkImg}
              alt="spark img"
            />
          </motion.div>
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
            className="ml-[9.75rem] mt-[1.875rem]"
          >
            <h2 className="text-[#fffffff2] font-bold text-2xl mb-[0.125rem]">
              {t('home.cameraTitle')}
            </h2>
            <p className="text-[#ffffffa7] text-lg w-[75%]">
              {t("home.cameraDescription")}
            </p>
          </motion.div>
        </div>
      </div>
      <Experiences />
      <Accessories />
      <Application />
      <NewProduct />
    </div>
  );
}
