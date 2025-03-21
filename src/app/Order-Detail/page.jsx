import React from 'react';
import style from "./order.module.css"
import Image from 'next/image';
import image from "../../../public/img/category.png"

const Order = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h2 className='text-2xl font-bold mb-5 text-center'>Order Details</h2>
        <div className={style.orderDetail}>
          <div className={style.orderImage}>
            <Image src={image} alt="order" width={100} height={150} className='rounded-[10px]' />
          </div>
          <div className="ml-[10px]">
            <h3 className='font-bold'>Party with friends at night-2022</h3>
            <div className={style.orderInfo1}>
              <p className='text-sm text-gray-800'>THU 26 May, 09:00</p>
            </div>
            <div className={style.orderInfo2}>
              <p className='text-sm text-gray-800'>Gandhingar</p>
            </div>
          </div>
        </div>
        <div className={style.cart}>
          <h3 className='font-bold mb-5 text-xl'>Order Summary</h3>
          <div className="flex justify-between mb-[10px]">
           <p>2x Ticket price</p> <span className={style.orderFee}>$30.00</span>
          </div>
          <div className="flex justify-between mb-[10px]">
           <p>Subtotal</p> <span className={style.orderFee}>$30.00</span>
          </div>
          <div className="flex justify-between mb-[10px]">
           <p>Fees</p> <span className={style.orderFee}>$3.00</span>
          </div>
          <hr />
          <div className="flex justify-between mb-[10px]">
           <p className='font-bold'>Total</p> <span className='font-bold'>$33.00</span>
         </div>
        </div>

        <div id={style.paymentMethod}>
          <h3 className='font-bold mb-5'>Payment Method</h3>
          <div className='flex justify-between mb-3'>
            <label htmlFor="credit">Credit/Debit Card</label>
            <input type="radio" name="payment" id="credit" />
          </div>
          <div className='flex justify-between mb-3'>
            <label htmlFor="paypal">Paypal</label>
            <input type="radio" name="payment" id="paypal" />
          </div>
        </div>

        <div className="mt-[20px] flex justify-between">
          <div className={style.totalPrice}>
            <p>Price</p>
            <span className="font-bold">$33.00</span>
          </div>
          <button className={style.orderButton}>Place Order</button>
        </div>
      </div>
    </>
  )
}

export default Order
