import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="span postCat">Music</span>
          <span className="span postCat">Life</span>
        </div>
        <span className="span postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </span>
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
      </p>
    </div>
  );
}
