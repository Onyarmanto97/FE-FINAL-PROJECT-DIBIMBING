import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
          className="singlePostImg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Reei</b>
          </span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          voluptatum harum eos sapiente rerum voluptate, hic quas quaerat est
          eum perferendis ab, suscipit illo numquam totam quo vero cupiditate?
          Corporis.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          voluptatum harum eos sapiente rerum voluptate, hic quas quaerat est
          eum perferendis ab, suscipit illo numquam totam quo vero cupiditate?
          Corporis.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          voluptatum harum eos sapiente rerum voluptate, hic quas quaerat est
          eum perferendis ab, suscipit illo numquam totam quo vero cupiditate?
          Corporis.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          voluptatum harum eos sapiente rerum voluptate, hic quas quaerat est
          eum perferendis ab, suscipit illo numquam totam quo vero cupiditate?
          Corporis.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          voluptatum harum eos sapiente rerum voluptate, hic quas quaerat est
          eum perferendis ab, suscipit illo numquam totam quo vero cupiditate?
          Corporis.
        </p>
      </div>
    </div>
  );
}
