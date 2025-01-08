import { useCart } from '@/context/cartContext';
import { Product } from '@/types/product';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const AddtoCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <StyledWrapper>
      <button
        className="button flex items-center justify-center gap-2"
        onClick={() => addToCart(product)}
      >
          <FaShoppingCart size={18} />
        <span className="button-content">Add to cart</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;

  .button {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 3.4rem;
    padding: 0 2rem;
    border-radius: .5rem;
    background: #292e76;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(84deg, #292e76 20%, #4047af 100%);
    transition: all 0.475s;
  }
`;

export default AddtoCartButton;
