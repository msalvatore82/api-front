import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import Select from '../../components/Select/Select.jsx';
import Container from '../../components/Container/Container.js';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  { t('navBar.home') }
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              {/* agregar o quitar con ternarios */}
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  { t('navBar.register') }
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  { t('navBar.login') }
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  { t('navBar.about') }
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  { t('navBar.booking') }
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  { t('navBar.profile') }
                </Link>
              </li>
              <li>
                <Container>
                  <Select
                    selectedKey={ i18n.language }
                    data={
                      Object.keys(i18n.options.resources)
                        .map(key => ({ key, value: t(`languages.${key}`) }))
                    }
                    onChangeHandler={(language) => {
                      i18n.changeLanguage(language.key);
                    }}
                  />
                </Container>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
