import React from 'react';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SocialMediaItem from './SocialMediaItem';
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div>
        <h1 className="mb-2 text-2xl text-center">Enlaces Importantes</h1>
        <ul className="divide-y center">
          <SocialMediaItem icon={faCartShopping} url={'https://www.puntoticket.com/milenia-2023'} text={'¡Venta de entradas! Evanescence en Chile'}></SocialMediaItem>
          <SocialMediaItem icon={faLocationDot} url={'/como_llegar_espacio_riesco.pdf'} text={'¿Cómo llegar a espacio riesco?'}></SocialMediaItem>
          <SocialMediaItem icon={faApple} url={'https://music.apple.com/cl/playlist/evanescence-en-chile-2023-milenia-fest/pl.u-xlJXTGaYRpr'} text={'Apple Music Milenia Playlist'}></SocialMediaItem>
          <SocialMediaItem icon={faSpotify} url={'https://open.spotify.com/playlist/65zKEUX6WW6I03Cnbd13Ql?si=8-dO6P2VT4axcsTJews7dg'} text={'Spotify Milenia Playlist'}></SocialMediaItem>
          <SocialMediaItem icon={faYoutube} url={'https://music.youtube.com/playlist?list=PLIh3Bxwsbr3yswfdSW705Rz48cgh8A4pa&feature=share'} text={'Youtube Music Milenia Playlist'}></SocialMediaItem>
        </ul>
      </div>
      <div>
        <h1 className="mb-2 text-2xl text-center">Nuestras Redes Sociales</h1>
        <ul className="divide-y center">
          <SocialMediaItem icon={faFacebookF} url={'https://www.facebook.com/evanescencechileoficial'} text={'Facebook'}></SocialMediaItem>
          <SocialMediaItem icon={faTwitter} url={'https://twitter.com/Evan_Chile'} text={'Twitter'}></SocialMediaItem>
          <SocialMediaItem icon={faInstagram} url={'https://www.instagram.com/evenindeathchile/'} text={'Instagram'}></SocialMediaItem>
          <SocialMediaItem icon={faWhatsapp} url={'https://chat.whatsapp.com/L4NnVKNemE3FnVbV5kqoFv'} text={'Whatsapp Chile'}></SocialMediaItem>
          <SocialMediaItem icon={faWhatsapp} url={'https://chat.whatsapp.com/BoU1S1Op03qEyXspghGzqq'} text={'Whatsapp Concepción'}></SocialMediaItem>
          <SocialMediaItem icon={faWhatsapp} url={'https://chat.whatsapp.com/CtuzAz5sTdh6dff2xOEM8M'} text={'Whatsapp La Serena'}></SocialMediaItem>
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
