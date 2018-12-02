import { connect } from 'react-redux';
import { fetchWishes } from "../actions";
import Wishes from "../components/Wishes";

const mapStateToProps = state => {
    return {
        wishes: state.wishes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWishes: () => {
            dispatch(fetchWishes());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);