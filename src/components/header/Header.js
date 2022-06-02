
import React, {Component} from 'react'
import './Header.css'

class Header extends Component
{
	render()
	{
		return (
			<div className = 'hero-page'>
				<header className = 'header min-vh-100 position-relative'>
					<div className = 'img-overlay position-absolute w-100 h-100'></div>
					<div className = 'content position-absolute translate-middle top-50 start-50 text-center'>
						<h3 className = 'brand-name mb-5' ><span>D</span>eep<span>F</span>ake</h3>
						<p className = 'brand-description mb-3 text-muted'>There is a crack in everything, that’s how the light gets in</p>
						<p className = 'brand-description mb-3 text-muted'><span><i>- Leonard Cohen</i></span></p>

						<div className = 'empty-line mx-auto w-25 mb-5'></div>
						<a href = '#navbar' className = 'btn btn-outline-success text-capitalize btn-sm'>sign up <i className="fas fa-arrow-right ms-2"></i></a>
					</div>
				</header>
			</div>
		)
	}
}

export default Header