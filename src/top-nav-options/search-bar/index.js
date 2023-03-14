
function SearchBar() {
    return (
        <div class="col p-2">
        <form className="navbar-form rounded-pill" role="search">
            <div className="form-group">
                <input type="text" className="form-control rounded-pill px-6" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-default d-inline wd-float-right">Submit</button>
        </form>
        </div>
        );
}
export default SearchBar;