import React, { Component } from 'react'
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginPage() {
    const { t } = useTranslation();
        return (
            <form>
                <h3>{t('login')}</h3>

                <div className="form-group">
                    <label>{t('email')}</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>{t('password')}</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">{t('remember')}</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">{t('submit')}</button>
                <p className="forgot-password text-right">
                {t('forgot')} <a href="#">{t('password')}?</a>
                </p>
            </form>
        )
    
}
export default LoginPage;