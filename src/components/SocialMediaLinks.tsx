import React from 'react';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SocialMediaItem from './SocialMediaItem';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const SocialMediaLinks: React.FC = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl">Nuestras Redes Sociales</h1>
      <ul className="divide-y center">
        <SocialMediaItem icon={faCartShopping} url={'https://www.puntoticket.com/milenia-2023'} text={'¡Venta de entradas! Evanescence en Chile'}></SocialMediaItem>
        <SocialMediaItem icon={faFacebookF} url={'https://www.facebook.com/evanescencechileoficial'} text={'Facebook'}></SocialMediaItem>
        <SocialMediaItem icon={faTwitter} url={'https://twitter.com/Evan_Chile'} text={'Twitter'}></SocialMediaItem>
        <SocialMediaItem icon={faInstagram} url={'https://www.instagram.com/evenindeathchile/'} text={'Instagram'}></SocialMediaItem>
        <SocialMediaItem icon={faWhatsapp} url={'https://chat.whatsapp.com/L4NnVKNemE3FnVbV5kqoFv'} text={'Whatsapp Chile'}></SocialMediaItem>
        <SocialMediaItem icon={faWhatsapp} url={'https://chat.whatsapp.com/BoU1S1Op03qEyXspghGzqq'} text={'Whatsapp Concepción'}></SocialMediaItem>
        <SocialMediaItem icon={faWhatsapp} url={'https://chat.whatsapp.com/CtuzAz5sTdh6dff2xOEM8M'} text={'Whatsapp La Serena'}></SocialMediaItem>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
