import React from 'react'; 

export default function SpecVersionDropdown(props) {
  function versionChange(e){
    window.location.href = e.target.value
  }

  return (
      <div className="spec-version-dropdown">
          <form className="dropdown-container">
              <label for="VersionList">Version:</label>
              <select id='VersionList' onChange={(e) => versionChange(e)}>
                  {props.options.map(option => ( option.title == props.default ? 
                      <option value={option.link} selected>{option.title}</option> : <option value={option.link}>{option.title}</option>
                  ))}
              </select>
          </form>
      </div>
  );
}
