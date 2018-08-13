import React from 'react'
import { connect } from 'react-redux'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Menu = (props) => {
    return (
        <div className="header_menu">
            {
                Object.keys(props.categories).map(item => (
                    <AnchorLink
                        href={ '#' + item}
                        key={item}
                    >
                        {item}
                    </AnchorLink>
                ))
            }
        </div>
    )
}


const mapStateToProps = state => ({
    categories: state.categories
})


export default connect (mapStateToProps) (Menu)