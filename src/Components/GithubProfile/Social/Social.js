import { ReactComponent as BlogIcon } from '../../../images/blog-solid.svg';
import { ReactComponent as TwitterIcon } from '../../../images/twitter-brands.svg';
import { ReactComponent as Email } from '../../../images/envelope-solid.svg';

export const Social = ({blog, twitter, email}) => {
    return (
        <>
            { blog || twitter || email ? 
                <div className='social'>
                    {blog ?
                        <a href={blog}  className='blog'><BlogIcon /></a>
                    : null }
                    {twitter ?
                        <a href={`https://twitter.com/${twitter}`} className='twitter'><TwitterIcon /></a>
                    : null }
                    {email ?
                        <a href={`mailto:${email}`} className='email'><Email /></a>
                    : null }
                </div> 
            : null }
        </>
    );
}