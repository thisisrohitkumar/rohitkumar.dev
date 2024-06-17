import React from 'react'

const MobileNav = () => {
  return (
    <>
        <div className="mobile__nav">
      <ul>
          <li>
            <em>01.</em> Profile
          </li>
          <li>
            <em>02.</em> Experiences
          </li>
          <li>
            <em>03.</em> Projects
          </li>
          <li>
            <em>04.</em> Skills
          </li>
          <li>
            <em>05.</em> Contact
          </li>
          {/* <li onClick={switchTheme}>
            {isDarkModeActive ? (
              <FaToggleOn className="switch" title="Switch to Light Mode" />
            ) : (
              <FaToggleOff className="switch" title="Switch to Dark Mode" />
            )}
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default MobileNav