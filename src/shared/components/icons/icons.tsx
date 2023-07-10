import { FC } from 'react';

export interface IIconProps {
	width?: string;
	height?: string;
	className?: string;
	onClick?: () => void;
}

export const HidePasswordIcon: FC<IIconProps> = ({ height, width, className }: IIconProps) => (
	<svg viewBox='0 0 40 40' fill='none' className={className || ''} width={width || '20'} height={height || '20'}>
		<g opacity='0.3'>
			<path d='M19.8437 24.375C21.0041 24.375 22.1169 23.9141 22.9373 23.0936C23.7578 22.2731 24.2187 21.1603 24.2187 20C24.2187 19.8719 24.2129 19.7449 24.2019 19.6196L19.4633 24.3582C19.5887 24.3692 19.7152 24.375 19.8437 24.375ZM34.325 6.4672L32.6562 4.80001C32.5976 4.74145 32.5182 4.70856 32.4353 4.70856C32.3525 4.70856 32.273 4.74145 32.2144 4.80001L27.9441 9.0715C25.5884 7.86759 22.9404 7.26564 20 7.26564C12.4922 7.26564 6.89061 11.1758 3.19529 18.9961C3.04676 19.3106 2.96973 19.6541 2.96973 20.002C2.96973 20.3498 3.04676 20.6933 3.19529 21.0078C4.67186 24.118 6.44985 26.6108 8.52928 28.4864L4.39686 32.6172C4.3383 32.6758 4.3054 32.7553 4.3054 32.8381C4.3054 32.921 4.3383 33.0004 4.39686 33.059L6.06444 34.7266C6.12303 34.7851 6.20249 34.818 6.28533 34.818C6.36818 34.818 6.44763 34.7851 6.50623 34.7266L34.325 6.90939C34.354 6.88037 34.3771 6.8459 34.3928 6.80796C34.4086 6.77003 34.4166 6.72936 34.4166 6.6883C34.4166 6.64723 34.4086 6.60656 34.3928 6.56863C34.3771 6.53069 34.354 6.49622 34.325 6.4672ZM12.9687 20C12.9686 18.8125 13.2761 17.6453 13.8612 16.612C14.4463 15.5786 15.289 14.7145 16.3074 14.1036C17.3257 13.4928 18.4849 13.1562 19.672 13.1265C20.8591 13.0969 22.0337 13.3752 23.0812 13.9344L21.182 15.8336C20.4161 15.5884 19.5974 15.5588 18.8158 15.7482C18.0341 15.9377 17.3198 16.3387 16.7511 16.9074C16.1824 17.4761 15.7814 18.1904 15.592 18.9721C15.4025 19.7537 15.4321 20.5724 15.6773 21.3383L13.7781 23.2375C13.2451 22.2417 12.9671 21.1295 12.9687 20Z' />
			<path d='M36.8047 18.9922C35.4297 16.0964 33.7931 13.735 31.8949 11.9082L26.2645 17.5391C26.7391 18.7797 26.8443 20.1313 26.5674 21.4305C26.2904 22.7297 25.6432 23.9209 24.7039 24.8602C23.7646 25.7995 22.5735 26.4467 21.2743 26.7236C19.9751 27.0005 18.6235 26.8953 17.3828 26.4207L12.6071 31.1965C14.8227 32.2218 17.287 32.7344 20 32.7344C27.5078 32.7344 33.1094 28.8242 36.8047 21.0039C36.9533 20.6894 37.0303 20.3459 37.0303 19.9981C37.0303 19.6502 36.9533 19.3067 36.8047 18.9922Z' />
		</g>
	</svg>
);

export const ShowPasswordIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 40 40' fill='none' className={className || ''}>
		<path d='M19.9955 13.6332C16.9871 13.6332 14.5422 16.0781 14.5422 19.0865C14.5422 22.095 16.9871 24.5398 19.9955 24.5398C23.004 24.5398 25.4488 22.095 25.4488 19.0865C25.4488 16.0781 23.0039 13.6332 19.9955 13.6332Z' />
		<path d='M19.9955 5.45331C10.9066 5.45331 3.14477 11.1065 0 19.0866C3.14477 27.0665 10.9066 32.7198 19.9955 32.7198C29.0934 32.7198 36.8462 27.0665 39.991 19.0866C36.8462 11.1065 29.0934 5.45331 19.9955 5.45331ZM19.9955 28.1754C14.9784 28.1754 10.9066 24.1035 10.9066 19.0865C10.9066 14.0694 14.9784 9.9977 19.9955 9.9977C25.0125 9.9977 29.0844 14.0695 29.0844 19.0866C29.0844 24.1036 25.0125 28.1754 19.9955 28.1754Z' />
	</svg>
);

export const Dashboard: FC<IIconProps> = ({ height, width }) => {
	return (
		<svg width={width || '28'} height={height || '28'} viewBox='0 0 20 20' fill='none'>
			<g clipPath='url(#clip0_386_1092)'>
				<path
					d='M16.6666 16.6667C16.6666 16.8877 16.5789 17.0996 16.4226 17.2559C16.2663 17.4122 16.0543 17.5 15.8333 17.5H4.16665C3.94563 17.5 3.73367 17.4122 3.57739 17.2559C3.42111 17.0996 3.33331 16.8877 3.33331 16.6667V9.16666H0.833313L9.43915 1.34333C9.59257 1.20373 9.79255 1.12637 9.99998 1.12637C10.2074 1.12637 10.4074 1.20373 10.5608 1.34333L19.1666 9.16666H16.6666V16.6667ZM9.16665 10.8333V15.8333H10.8333V10.8333H9.16665Z'
					fill='#88949D'
				/>
			</g>
			<defs>
				<clipPath id='clip0_386_1092'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export const SideNavIcon = ({ height, width, className }: IIconProps) => {
	return (
		<svg width={width || '40'} height={height || '40'} className={className || ''} viewBox='0 0 40 40' fill='none'>
			<rect x='-7.62939e-05' width='40' height='40' rx='5' fill='#80808075' />
			<g clipPath='url(#clip0_362_3265)'>
				<path
					d='M29.1303 19.1304H10.8695C10.3892 19.1304 9.99992 19.5197 9.99992 19.9999C9.99992 20.4802 10.3892 20.8695 10.8695 20.8695H29.1303C29.6106 20.8695 29.9999 20.4802 29.9999 19.9999C29.9999 19.5197 29.6106 19.1304 29.1303 19.1304Z'
					fill='white'
				/>
				<path
					d='M10.8695 14.7826H29.1303C29.6106 14.7826 29.9999 14.3933 29.9999 13.913C29.9999 13.4328 29.6106 13.0435 29.1303 13.0435H10.8695C10.3892 13.0435 9.99992 13.4328 9.99992 13.913C9.99992 14.3933 10.3892 14.7826 10.8695 14.7826Z'
					fill='white'
				/>
				<path
					d='M29.1303 25.2178H10.8695C10.3892 25.2178 9.99992 25.6071 9.99992 26.0874C9.99992 26.5676 10.3892 26.9569 10.8695 26.9569H29.1303C29.6106 26.9569 29.9999 26.5676 29.9999 26.0874C29.9999 25.6071 29.6106 25.2178 29.1303 25.2178Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_362_3265'>
					<rect width='20' height='20' fill='white' transform='translate(9.99992 10)' />
				</clipPath>
			</defs>
		</svg>
	);
};

export const SettleList = () => {
	return (
		<svg width='28' height='28' viewBox='0 0 25 24' fill='none'>
			<g clipPath='url(#clip0_1_2348)'>
				<path
					d='M19.3164 22H5.31641C4.52076 22 3.7577 21.6839 3.19509 21.1213C2.63248 20.5587 2.31641 19.7956 2.31641 19V3C2.31641 2.73478 2.42176 2.48043 2.6093 2.29289C2.79684 2.10536 3.05119 2 3.31641 2H17.3164C17.5816 2 17.836 2.10536 18.0235 2.29289C18.2111 2.48043 18.3164 2.73478 18.3164 3V15H22.3164V19C22.3164 19.7956 22.0003 20.5587 21.4377 21.1213C20.8751 21.6839 20.1121 22 19.3164 22ZM18.3164 17V19C18.3164 19.2652 18.4218 19.5196 18.6093 19.7071C18.7968 19.8946 19.0512 20 19.3164 20C19.5816 20 19.836 19.8946 20.0235 19.7071C20.2111 19.5196 20.3164 19.2652 20.3164 19V17H18.3164ZM16.3164 20V4H4.31641V19C4.31641 19.2652 4.42176 19.5196 4.6093 19.7071C4.79684 19.8946 5.05119 20 5.31641 20H16.3164ZM6.31641 7H14.3164V9H6.31641V7ZM6.31641 11H14.3164V13H6.31641V11ZM6.31641 15H11.3164V17H6.31641V15Z'
					fill='#88949D'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_2348'>
					<rect width='24' height='24' fill='white' transform='translate(0.316406)' />
				</clipPath>
			</defs>
		</svg>
	);
};
