import './tags.scss';

function Tags({ tagname }) {
  return (
    <div className="tags">
      <p className="tags_p">{tagname}</p>
    </div>
  );
}

export default Tags;
