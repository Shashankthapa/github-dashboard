const nav = () => {

    return (
        <nav id = "navbar">   
            <div class = "flex-start">
                <div class = "hamburger-menu-container">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class = "github-icon-container">
                    <i class="fa-brands fa-github fa-2xl"></i>
                </div>
                <div class = "dashboard-label-container">
                    <p class = "dash-font">Dashboard</p>
                </div>
            </div>
            <div class = "flex-end">
                <div class = "search">
                    <i id = "magnifing-icon" class="fa-solid fa-magnifying-glass"></i>
                    <div id = "msg-search-nav">
                        <div id = "msg-search-desc">Type / for search</div>
                    </div>
                    <img id = "palette-icon" src={require("./images/command-palette.png")} alt="" />
                </div>
                <div class = "nav-link">
                    <i id = "plus-icon" class="fa-solid fa-plus"></i>
                    <select name="" id="select">
                        <option></option>
                    </select>
                </div>
                <div class = "nav-link">
                    <i class="nav-link-icon fa-regular fa-circle-dot"></i>
                </div>
                <div class  = "nav-link">
                    <i class="nav-link-icon fa-solid fa-code-pull-request"></i>
                </div>
                <div class ="nav-link">
                    <i class="nav-link-icon fa-solid fa-envelope"></i>
                </div>
                <img class="face-nav" src="https://avatars.githubusercontent.com/u/76707560?s=80&amp;v=4"/>
            </div>
        </nav>
    )
}

export default nav;