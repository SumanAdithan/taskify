// images
import logo from '@assets/images/logo.png';
import editIcon from '@assets/icons/edit.png';
import deleteIcon from '@assets/icons/delete.png';

interface ImageAssets {
    logo: string;
}

interface IconAssets {
    editIcon: string;
    deleteIcon: string;
}

export const images: ImageAssets = {
    logo,
};

export const icons: IconAssets = {
    editIcon,
    deleteIcon,
};
