import React from 'react'
import SearchResult from './SearchResult'
import Category from './Category'
import EmojiBlock from './EmojiBlock'

const ContentArea = () => {
    return (
        <div className="content_area">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Category />
                    </div>
                    <div className="col-9">
                        <EmojiBlock />
                        <SearchResult />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArea