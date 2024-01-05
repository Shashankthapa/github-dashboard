// import "./navabar.css"

import command_palette from "../../images/command-palette.png";

const nav = () => {
  return (
    <nav class="navbar grid grid-cols-2">
      <div class="flex text-white justify-start items-center">
        <div class="hamburger-menu-container">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="github-icon-container">
          <i class="fa-brands fa-github fa-2xl"></i>
        </div>
        <div class="dashboard-label-container">
          <p class="dash-font">Dashboard</p>
        </div>
      </div>
      <div class="flex items-center items-center justify-end">
        <div class="magnifing-container bg-blue text-white w-100">
          <i class="fa-solid fa-magnifying-glass border rounded-sm p-2 mr-2 border-gray-700"></i>
        </div>
        <div class="search">
          <i id="magnifing-icon" class="fa-solid fa-magnifying-glass"></i>
          <div class="msg-search-nav">
            <div class="msg-search-desc text-sm text-white pr-40">
              Type / for search
            </div>
          </div>
          <img class="palette-icon w-5 p-1" src={command_palette} alt="" />
        </div>
        <div class="flex nav-link items-center">
          <i id="plus-icon" class="fa-solid fa-plus"></i>
          <select name="" id="select">
            <option></option>
          </select>
        </div>
        <div class="nav-link">
          <i class="nav-link-icon fa-regular fa-circle-dot"></i>
        </div>
        <div class="nav-link">
          <i class="nav-link-icon fa-solid fa-code-pull-request"></i>
        </div>
        <div class="nav-link">
          <i class="nav-link-icon fa-solid fa-envelope"></i>
        </div>
        <img
          class="face-nav"
          src="https://avatars.githubusercontent.com/u/76707560?s=80&amp;v=4"
        />
      </div>
    </nav>
  );
};

export default nav;
