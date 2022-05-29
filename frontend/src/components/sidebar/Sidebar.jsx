import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
          src="https://mystickermania.com/cdn/stickers/travel/previews-512x512.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit
          enim, expedita perferendis ut vitae fuga laboriosam dolores quisquam
          voluptatem corporis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocialContainer">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
