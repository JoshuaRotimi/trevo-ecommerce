import React, {useState, useContext, useEffect} from "react";
import Head from "next/head";
import {DataContext} from "../../store/GlobalState";
import {useRouter} from "next/router";
import Link from "next/link";
import OrderDetail from "../../components/OrderDetail";

const DetailOrder = () => {
    const {state, dispatch} = useContext(DataContext);
    const {orders, auth} = state;

    const router = useRouter();


    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        const newArr = orders.filter(order => order._id === router.query.id);
        setOrderDetail(newArr)
    }, []);
  return (
      <div className={'my-3'}>
         <Head>
             <title>Detail Orders</title>
         </Head>
          <div>
              <button className={'btn btn-dark'} onClick={() => router.back()}>
                  <i className={'fas fa-long-arrow-alt-left'} aria-hidden={'true'}/> Go Back
              </button>
          </div>

          <OrderDetail orderDetail={orderDetail} auth={auth}/>
      </div>
  )
};

export default DetailOrder;