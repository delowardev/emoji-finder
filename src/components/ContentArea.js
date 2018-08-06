import React from 'react'
import EmojiList from './EmojiList'
import Category from './Category'

export default () => {
    return (
        <div className="content_area">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Category />
                    </div>
                    <div className="col-9">
                        <EmojiList />
                    </div>
                </div>
            </div>
        </div>
    )
}
