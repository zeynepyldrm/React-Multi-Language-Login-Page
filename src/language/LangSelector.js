import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'
import cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'



const languages = [
    {
        code: 'tr',
        name: 'Turkish',
        country_code: 'tr',
    },
    {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        country_code: 'gb',
    },

]

const LangSelector = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()



    useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])


    return (

        <div className="container">
            <div className="language-select">
                <div className="d-flex justify-content-end align-items-center language-select-root">
                    <div className="dropdown">
                        <button
                            className="btn btn-link dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Language
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <span className="dropdown-item-text"> </span>
                            </li>
                            {languages.map(({ code, name, country_code }) => (
                                console.log(code),
                                < li key={country_code} >
                                    <a href={code} className="dropdown-item"
                                        
                                        disabled={code === currentLanguageCode}
                                    >
                                        <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                        {name}

                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>s
        </div >
    )
}
export default LangSelector;