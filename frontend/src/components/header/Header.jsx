import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://ensia.com/wp-content/uploads/2022/03/Voices_nature-positive_main-920x460.jpg" alt="" />
    </div>
  )
}
