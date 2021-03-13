import './List.css';
import ListItem from './ListItem';

function List(props) {
  const sectionClasses = ['list-section'];

  if (props.items.length === 0) {
    sectionClasses.push('empty');
  }

  return (
    <section className={sectionClasses.join(' ')}>
      <details className="list-details" open={props.open}>
        <summary>
          {props.summary} <span>({props.items.length})</span>
        </summary>
        <ul className="list">
          {props.items.map((item) =>
            <ListItem
              item={item}
              key={item.id}
              toggleChecked={props.toggleChecked}
            />
          )}
        </ul>
      </details>
    </section>
  )
}

export default List;