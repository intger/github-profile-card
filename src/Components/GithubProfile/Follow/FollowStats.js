export const FollowStats = ({following, followers}) => {

    return (
        <div className='follow-stats'>
            <div className='following'>
                <span className='number'>{following}</span>
                <span className='label'>Following</span>
            </div>
            <div className='followers'>
                <span className='number'>{followers}</span>
                <span className='label'>Followers</span>
            </div>
        </div>
    );
}