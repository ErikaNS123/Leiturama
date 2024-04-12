import './style.css'
import logo from '../../img/logo.svg'

function Logo() {
	return (
		<div className='logo'>
			<img src={logo} alt='logo leiturama' className='logo-img'></img>
			<p><strong>Leiturama</strong></p>
		</div>
	);
}

export default Logo;