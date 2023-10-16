import React from 'react';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialMediaItem from './SocialMediaItem';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
      <div>
        <h1 className="mb-2 text-2xl text-center">Nuestras Redes Sociales</h1>
        <ul className="divide-y center">
          <SocialMediaItem icon={faFacebookF} url={'https://www.facebook.com/evanescencechileoficial'} text={'Facebook'}></SocialMediaItem>
          <SocialMediaItem icon={faTwitter} url={'https://twitter.com/Evan_Chile'} text={'Twitter'}></SocialMediaItem>
          <SocialMediaItem icon={faInstagram} url={'https://www.instagram.com/evenindeathchile/'} text={'Instagram'}></SocialMediaItem>
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
