import React from 'react'
import SearchResult from './SearchResult'
import Category from './Category'
import EmojiBlock from './EmojiBlock'
import CopyEmoji from './CopyEmojii'
import FontSize from './FontSize'
import Search from './Search'

const ContentArea = () => {
    return (
        <div className="content_area">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="sidebar">
                            <CopyEmoji />
                            <FontSize />
                            <Category />
                        </div>
                    </div>
                    <div className="col-9">
                        <Search />
                        <SearchResult />
                        <EmojiBlock />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArea