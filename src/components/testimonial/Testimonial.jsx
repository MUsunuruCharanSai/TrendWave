import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className="container mx-auto px-5 py-10">
                    <h1 className='text-center text-3xl font-bold text-black ' style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Reviews</h1>
                    <h2 className='text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className='text-pink-500'>customers</span> are saying about our products</h2>
                    <div className="flex flex-wrap -m-4">
                        
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"I love the product quality! The fit is perfect, and the designs are spot on. I'll definitely shop here again!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                        
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRudSGOMnDwDKmV6GKfxC1ELqzuXAPwMYNoA&s" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"The customer service and product quality are unbeatable. I’ve recommended this shop to all my friends!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sara Wilson</h2>
                      
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q9GlWCAoQHPpOiDOECuYUeXW9MQP7Ddt-Q&s" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"Fast delivery and top-notch quality. The fabric feels luxurious, and the product looks exactly as advertised."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">John Doe</h2>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
