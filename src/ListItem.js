import './ListItem.css';

function ListItem(props) {
  let classNames = ['list-item'];

  if (props.item.complete === true) {
    classNames.push('done');
  }

  const pushToggle = (event) => {
    props.toggleChecked(props.item);
  }

  return (
    <li className={classNames.join(" ")}>
      <label>
        <input
          checked={props.item.complete}
          onChange={pushToggle}
          type="checkbox"
        />
        <span>{props.item.name}</span>
      </label>
    </li>
  )
}

export default ListItem;