import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { ReactComponent as BlogIcon } from '../../images/blog-solid.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter-brands.svg';
import { ReactComponent as Email } from '../../images/envelope-solid.svg';

export const Profile = () => {

    const {githubData} = useAppContext();

    return (
        <section className='github-profile'>
            <div className='container'>
                <h2>Profile for Github User - {githubData.login}</h2>
                <div className='profile-card'>
                    <div className='header'></div>
                    <div className='avatar'>
                        <img src={githubData.avatar_url} alt="Github Avatar" />
                    </div>
                    <div className='info'>
                        {githubData.name ? <span className='name'>{githubData.name}</span> : null}
                        {githubData.bio ? <span className='bio'>{githubData.bio}</span> : null}
                    </div>
                    <div className='follow-stats'>
                        <div className='following'>
                            <span className='number'>{githubData.following}</span>
                            <span className='label'>Following</span>
                        </div>
                        <div className='followers'>
                            <span className='number'>{githubData.followers}</span>
                            <span className='label'>Followers</span>
                        </div>
                    </div>
                    <div className='github-stats'></div>
                    <button className='btn btn-primary github-btn' href={githubData.html_url}>Visit profile on Github</button>
                    {githubData.blog || githubData.twitter_username ? 
                    <div className='social'>
                        {githubData.blog ?
                            <a href={githubData.blog}  className='blog'><BlogIcon /></a>
                         : null }
                         {githubData.twitter_username ?
                            <a href={`https://twitter.com/${githubData.blog}`} className='twitter'><TwitterIcon /></a>
                        : null }
                         {githubData.email ?
                            <a href={`mailto:${githubData.email}`} className='email'><Email /></a>
                        : null }
                    </div> 
                    : null}
                </div>
            </div>
        </section>

    );
}