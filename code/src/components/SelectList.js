/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
const SelectList = ({ selectList, setSelectList }) => {
  const onSelectListChange = (event) => {
    setSelectList(event.target.value)
  }
  return (
    <form>
      <select
        value={selectList}
        onChange={onSelectListChange}>
        <option value="top_rated">Top rated</option>
      </select>
    </form>

  )
}
export default SelectList
