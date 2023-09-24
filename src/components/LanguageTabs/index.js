import './index.css'

const LanguageTabs = props => {
  const {item, onClickTabItem, isClicked} = props
  const {buttonText, id} = item

  const onClickTab = () => {
    console.log('tab item is clicked')
    onClickTabItem(id)
  }

  const activeCls = isClicked ? 'activeClassName' : ''

  return (
    <li className="tab-item ">
      <button
        type="button"
        className={`Langbutton ${activeCls}`}
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageTabs
