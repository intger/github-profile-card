import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Avatar } from './Avatar/Avatar';
import { Info } from './Info/Info';
import { FollowStats } from './Follow/FollowStats';
import { Social } from './Social/Social';

export const Profile = () => {

    const {githubData} = useAppContext();

    return (
        <section className='github-profile'>
            <div className='container'>
                <h2>Profile for Github User - {githubData.login}</h2>
                <div className='profile-card'>
                    <div className='header'></div>
                    <Avatar url={githubData.avatar_url} />
                    <Info name={githubData.name} bio={githubData.bio} />
                    <FollowStats following={githubData.following} followers={githubData.followers} />
                    <button className='btn btn-primary github-btn' href={githubData.html_url}>Visit profile on Github</button>
                    <Social blog={githubData.blog} twitter={githubData.twitter_username} email={githubData.email} />
                </div>
            </div>
        </section>

    );
}