import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

export default function Modal({ buyNow }) {
  const [name, setLocalName] = useState("");
  const [address, setLocalAddress] = useState("");
  const [pincode, setLocalPincode] = useState("");
  const [phoneNumber, setLocalPhoneNumber] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleOrderNow = async () => {
    // Collecting data from local state
    const orderData = {
      name,
      address,
      pincode,
      phoneNumber,
    };

    try {
      // Call the buyNow function to send data to your Firestore
      toast.success("Order placed successfully!");
      await buyNow(orderData);
      
      setLocalName('');
      setLocalAddress('');
      setLocalPincode('');
      setLocalPhoneNumber('');

      
    } catch (error) {
      console.error("Error placing order:", error);
      // Optionally, you can display an error message to the user here
      
    }
  };

  return (
    <>
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section>
                    <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6">
                            <div>
                              <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setLocalName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Address
                              </label>
                              <input
                                value={address}
                                onChange={(e) =>
                                  setLocalAddress(e.target.value)
                                }
                                type="text"
                                name="address"
                                id="address"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Pincode
                              </label>
                              <input
                                value={pincode}
                                onChange={(e) =>
                                  setLocalPincode(e.target.value)
                                }
                                type="text"
                                name="pincode"
                                id="pincode"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                value={phoneNumber}
                                onChange={(e) =>
                                  setLocalPhoneNumber(e.target.value)
                                }
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                          </form>
                          <button
                            onClick={handleOrderNow}
                            type="button"
                            className="focus:outline-none w-full text-white bg-violet-600 hover:bg-violet-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                          >
                            Order Now
                          </button>
                          <button
                            onClick={closeModal}
                            style={{
                              backgroundColor: "#4A90E2", // blue background
                              color: "#FFFFFF", // white text
                              border: "none", // no border
                              borderRadius: "5px", // rounded corners
                              padding: "10px 20px", // padding
                              cursor: "pointer", // pointer cursor
                              fontSize: "16px", // font size
                              transition: "background-color 0.3s", // smooth transition
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#357ABD")
                            } // darker blue on hover
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#4A90E2")
                            } // back to original color
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
