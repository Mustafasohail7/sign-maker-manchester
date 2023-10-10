import '../../styles/CartOverlay.css'

const CartOverlay = ({setHovered}) => {
  return (
    <div className="cart-overlay">
      <button onClick={()=>setHovered(false)}>x</button>
      hello
    </div>
  )
}

export default CartOverlay
