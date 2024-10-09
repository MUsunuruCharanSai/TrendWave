import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import { fireDB } from '../../firebase/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

function Order() {
  const [orders, setOrders] = useState([]); // State to hold orders
  const [loading, setLoading] = useState(true); // Loading state
  const context = useContext(myContext);
  const { mode } = context;
  const userid = JSON.parse(localStorage.getItem('user')).user.uid; // Get user ID

  // Function to fetch orders from Firestore
  const fetchOrders = async () => {
    setLoading(true); // Set loading to true while fetching data
    try {
      const ordersCollection = collection(fireDB, 'orders');
      const q = query(ordersCollection, where('userid', '==', userid)); // Query to filter orders by userid
      const orderDocs = await getDocs(q);

      // Map through documents to create an array of order objects
      const fetchedOrders = orderDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(fetchedOrders); // Set the fetched orders to state
    } catch (error) {
      console.error('Error fetching orders:', error); // Log any errors
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch orders when the component mounts
  useEffect(() => {
    fetchOrders();
  }, [userid]); // Re-run if userid changes

  return (
    <Layout>
      {loading ? (
        <Loader /> // Show loader while fetching
      ) : (
        <div className="overflow-x-auto">
          {orders.length > 0 ? (
            <table className={`min-w-full border-collapse border border-gray-200`}>
              <thead>
                <tr>
                  <th className={`border border-gray-300 p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>Order ID</th>
                  <th className={`border border-gray-300 p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>Product</th>
                  <th className={`border border-gray-300 p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>Quantity</th>
                  <th className={`border border-gray-300 p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>Price</th>
                  <th className={`border border-gray-300 p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  order.cartItems.map((item, index) => (
                    <tr key={index} className={`${mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                      <td className="border border-gray-300 p-2">{order.id}</td>
                      <td className="border border-gray-300 p-2">{item.title}</td>
                      <td className="border border-gray-300 p-2">{item.quantity}</td>
                      <td className="border border-gray-300 p-2">{item.price}</td>
                      <td className="border border-gray-300 p-2">{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className='text-center text-2xl text-black'>No Orders Found</h2> // Message for no orders
          )}
        </div>
      )}
    </Layout>
  );
}

export default Order;
