

function Header(props) {

    const {text} = props;

  return (
    <header>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

export default Header