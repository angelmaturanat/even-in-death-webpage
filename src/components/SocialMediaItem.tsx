import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SocialMediaItemProps {
    icon: IconProp;
    url: string;
    text: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = (props: SocialMediaItemProps) => {
    const { icon, url, text } = props;

    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
                <a href={url} className={`text-white-500 hover:text-blue-700`}>
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {text}
                </a>
            </div>
        </li>
    )
}


export default SocialMediaItem;