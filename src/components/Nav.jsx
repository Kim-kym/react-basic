import PropTypes from "prop-types";
function Nav({ topics, onChangeMode }) {
  //  topics, onChangeMode
  /*
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
    */
  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              id={topic.id}
              href={"/read/" + topic.id}
              onClick={(event) => {
                event.preventDefault();
                onChangeMode(Number(event.target.id));
              }}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
Nav.propTypes = {
  topics: PropTypes.array,
  onChangeMode: PropTypes.func,
};
export default Nav;
