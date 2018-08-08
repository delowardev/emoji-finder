import React from 'react'
import SearchResult from './SearchResult'
import Category from './Category'
import EmojiBlock from './EmojiBlock'
import CopyEmoji from './CopyEmojii'

const ContentArea = () => {
    return (
        <div className="content_area">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <CopyEmoji />
                        <Category />
                    </div>
                    <div className="col-9">
                        <SearchResult />
                        <EmojiBlock />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArea