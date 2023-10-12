import HeaderOrderForm from "../components/HeaderOrderForm"
import CartList from "../components/CartList"

const OrderFormPage = ({order}) => {
  return (
    <>
      <HeaderOrderForm order={order}/>
      <CartList order={order}/>
    </>
  )
}

export default OrderFormPage
