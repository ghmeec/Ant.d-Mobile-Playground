import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, pros }) => {
  function handleDelete(id) {
    dispatch({
      type: 'pros/delete',
      payload: id,
    });
  }

  console.log("Products :",pros)
  return (
    <div>
      <h2>Data with DVA</h2>
      <ProductList onDelete={handleDelete} products={pros} />
    </div>
  );
};

export default connect(({ pros }) => ({
  pros
}))(Products);