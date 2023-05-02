import PropTypes from 'prop-types';
import LiItem from './LiItem';

const Todolist = ({
  todosprop, handleChange, DltTodo, setUpdate,
}) => (
  <ul>
    {todosprop.map((d) => (
      <LiItem key={d.id} itemProp={d} handleChange={handleChange} DltTodo={DltTodo} setUpdate={setUpdate} />
    ))}
  </ul>
);

Todolist.propTypes = {
  todosprop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  DltTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default Todolist;
