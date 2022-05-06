import React from 'react';
import { useAppContext } from '../../context/AppContext';

export const Profile = () => {

    const {githubData} = useAppContext();

    console.log(githubData);

    return (
        <section className='section github-profile'>
            <div className='container'>
                <h2>Profile for Github User - {githubData.login}</h2>
                <div className='profile-card'>
                    <div className='avatar'>
                        <img src={githubData.avatar_url} alt="Github Avatar" />
                    </div>
                </div>
            </div>
        </section>

    );
}