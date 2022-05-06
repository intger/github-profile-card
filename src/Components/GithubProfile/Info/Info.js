export const Info = ({name, bio}) => {

    return (
        <div className='info'>
            {name ? <span className='name'>{name}</span> : null}
            {bio ? <span className='bio'>{bio}</span> : null}
        </div>
    );
}