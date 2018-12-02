import { connect } from 'react-redux';
import { addWish } from "../actions";
import AddWish from "../components/AddWish";

const mapStateToProps = state => {
    return {
        wishes: state.wishes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addWish: (wish) => {
            dispatch(addWish(wish));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWish);