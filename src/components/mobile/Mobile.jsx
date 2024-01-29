import './mobile.scss'

const Mobile = ({children}) => {
    return <div className="iphone">
        <div className="iphone__inner">
            <div className="iphone__gif">
                {/* <img
                    src="https://www.apple.com/v/ios/ios-14-preview/a/images/overview/experience/widgets_3_screen__ewnx7m8gm402_large.jpg"
                    alt="#"
                /> */}
                {children}
            </div>
            <div className="iphone-header-button">
                <div className="iphone-header-button__left">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="iphone-header-button__right">
                    <span />
                </div>
            </div>
            <div className="iphone-header">
                <div className="iphone-header__inner">
                    <div className="iphone-header__item" />
                    <div className="iphone-header-circle">
                        <div className="iphone-header-circle__inner">
                            <div className="iphone-header-circle__item" />
                            <div className="iphone-header-circle__item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Mobile;