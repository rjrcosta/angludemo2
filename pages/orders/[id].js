import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/layouts/MainLayouts/MainLayout';
import OrderDetailsPageLayout from '../../components/layouts/PageLayouts/OrderDetailsPageLayout';
import { authSelector, refreshPage } from '../../store/feature/authSlice';

const OrderDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      refreshPage({
        key: localStorage.getItem('refresh_key'),
      })
    );
  }, [dispatch]);

  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('login')) {
      router.push('/');
    }
  }, [localStorage.getItem('login')]);

  const { login } = useSelector(authSelector);
  return <MainLayout>{login && <OrderDetailsPageLayout />}</MainLayout>;
};

export default OrderDetails;
