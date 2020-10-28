import React from 'react'

export default function ContentReqRowComposer({ data, changeHandler, index, deleteItem }) {
  return (
  <div className="is-flex mt-1">
    <div className="include-header-checkbox">
      <input
        type="checkbox"
        id={data.id}
        className='is-checkradio is-black has-no-border'
        checked={data.active}
        onChange={e => changeHandler(data.id, 'active', e.target.checked)}
      />
      <label htmlFor={data.id}></label>
    </div>
    <input 
      onChange={e => changeHandler(data.id, 'key', e.target.value)} 
      placeholder='Key'
      className="input" type="text" value={data.key} className="is-justify-content-center p-1" 
    />
    <input 
      onChange={e => changeHandler(data.id, 'value', e.target.value)} 
      placeholder="Value"
      className="input" type="text" value={data.value} className="is-justify-content-center is-flex-grow-4 p-1" 
    />
    <div className="is-flex is-justify-content-center is-align-items-center ml-1">
    <div 
    className='delete m-auto'
    onClick={() => deleteItem(index)}></div>
    </div>
    
  </div>
  )
}
