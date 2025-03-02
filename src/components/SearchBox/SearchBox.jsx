import s from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';


const SearchBox = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <input
                onChange={e => dispatch(changeFilter(e.target.value))}
                type="text"
                className={s.search}
                placeholder="Search contacts..." />
        </div>
    );
}

export default SearchBox;