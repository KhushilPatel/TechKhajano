import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="py-16 bg-black">
      <div className=" mx-auto ">
        <div className="grid grid-flow-col-dense gap-12">
          <div className="flex flex-col justify-center items-center bg-gray-100 text-center rounded-2xl shadow-lg h-52">
          <TbTruckDelivery style={{ fontSize: "70px", padding: "18px", borderRadius: "50%", background: "white", color: "purple" }} />

            <h3 className="mt-6 text-2xl">Super Fast and Free Delivery</h3>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex justify-center items-center bg-gray-100 text-center rounded-2xl shadow-lg h-52">
              <MdSecurity style={{ fontSize: "70px", padding: "18px", borderRadius: "50%", background: "white", color: "purple" }} />
              <h3 className="ml-4 text-2xl">Non-contact Shipping</h3>
            </div>
            <div className="flex justify-center items-center bg-gray-100 text-center rounded-2xl shadow-lg h-52">
              <GiReceiveMoney style={{ fontSize: "70px", padding: "18px", borderRadius: "50%", background: "white", color: "purple" }} />
              <h3 className="ml-4 text-2xl">Money-back Guaranteed</h3>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-100 text-center rounded-2xl shadow-lg h-52">
            <RiSecurePaymentLine style={{ fontSize: "70px", padding: "18px", borderRadius: "50%", background: "white", color: "purple" }} />
            <h3 className="mt-6 text-2xl">Super Secure Payment System</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
