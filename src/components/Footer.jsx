function Footer() {
    return <footer className="page-footer indigo lighten-3">
        <div className="footer-copyright indigo lighten-3">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/Anton-Sidko/ReactShop">Repo</a>
            </div>
        </div>
    </footer>
}

export {Footer}