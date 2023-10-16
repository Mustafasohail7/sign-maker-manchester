import HeaderOrderForm from "../components/HeaderOrderForm"
import CartList from "../components/CartList"

const OrderFormPage = ({order,handleItemRemove}) => {
  return (
    <>
      <HeaderOrderForm order={order}/>
      <CartList order={order} handleItemRemove={handleItemRemove}/>
    </>
  )
}

export default OrderFormPage
